import { msalInstance } from "@/app/_app";
import { loginRequest } from "@/authConfig";

export async function acquireGraphAccessToken() {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }
  
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
  
    return response.accessToken;
  }