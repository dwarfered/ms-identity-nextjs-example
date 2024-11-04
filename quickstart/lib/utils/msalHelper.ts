import { loginRequest, msalInstance } from "@/lib/msalConfig";

export async function acquireGraphAccessToken() {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  try {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    return response.accessToken;
  } catch (error) {
    if (error instanceof Error && (error.message.includes('AADSTS50058') || error.message.includes('AADSTS50076'))) {
      msalInstance.acquireTokenRedirect({
        ...loginRequest,
        account: account,
      });
    } else {
      console.error('Failed to acquire token silently', error);
    }
    throw error;
  }
}

export function handleSignIn() {
  msalInstance.loginRedirect(loginRequest).catch((e) => {
    console.error(`loginRedirect failed: ${e}`);
  });
}

export function handleSignOut() {
  msalInstance.logoutRedirect(loginRequest).catch((e) => {
    console.error(`loginRedirect failed: ${e}`);
  });
}