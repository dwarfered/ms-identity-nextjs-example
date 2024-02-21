import { AccountInfo, InteractionRequiredAuthError } from "@azure/msal-browser";
import { acquireGraphAccessToken } from "./MsalHelper";

import { loginRequest } from "@/authConfig";
import { msalInstance } from "@/app/_app";

export async function fetcher(...args: Parameters<typeof fetch>) {
  const headers = new Headers();
  const accessToken = await acquireGraphAccessToken();
  const bearer = `Bearer ${accessToken}`;
  headers.append("Authorization", bearer);
  const options = {
    method: "GET",
    headers: headers,
  };
  args.push(options);
  return await (await fetch(...args)).json().catch((e) => {
    if (e instanceof InteractionRequiredAuthError) {
      msalInstance.acquireTokenPopup({
        ...loginRequest,
        account: msalInstance.getActiveAccount() as AccountInfo,
      });
    }
  });
}
