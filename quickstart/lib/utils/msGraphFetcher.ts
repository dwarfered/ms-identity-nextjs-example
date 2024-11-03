import { AccountInfo, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest, msalInstance } from "@/lib/msalConfig";
import { acquireGraphAccessToken } from "./msalHelper";

export interface ODataResponse<T> {
  "@odata.context": string,
  value: T[]
}

export async function fetcher(...args: Parameters<typeof fetch>) {

  // fake delay
  // await new Promise(resolve => setTimeout(resolve, 5000));

  const headers = new Headers();
  const accessToken = await acquireGraphAccessToken();
  const bearer = `Bearer ${accessToken}`;
  headers.append("Authorization", bearer);
  const options = {
    method: "GET",
    headers: headers,
  };
  args.push(options);

  const response = await fetch(...args).catch((e) => {
    if (e instanceof InteractionRequiredAuthError) {
      msalInstance.acquireTokenPopup({
        ...loginRequest,
        account: msalInstance.getActiveAccount() as AccountInfo,
      });
    }
  });

  if (!response) {
    throw new Error('No response from fetch');
  }

  const contentType = response.headers.get("Content-Type");

  if (contentType?.includes("application/json")) {
    const data = await response.json();
    // Handle @odata.nextLink for pagination
    if (data['@odata.nextLink'] && typeof data['@odata.nextLink'] === 'string') {
      const nextPageData = await fetcher(data['@odata.nextLink']);
      data.value = [...(data.value || []), ...(nextPageData.value || [])];
    }
    return data;
  } else if (contentType?.includes("blob") || contentType?.includes("image")) {
    return response.blob();
  } else {
    throw new Error(`Unsupported content type: ${contentType}`);
  }
}