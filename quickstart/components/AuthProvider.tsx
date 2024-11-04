import { ReactNode } from "react";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "@/lib/msalConfig";
import { AuthenticationResult, EventMessage, EventType } from "@azure/msal-browser";
import { useRouter } from "next/navigation";
import { CustomNavigationClient } from "@/lib/customNavigationClient";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  msalInstance.initialize().then(() => {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
    }
  
    msalInstance.addEventCallback((event: EventMessage) => {
      if (event.eventType === EventType.LOGIN_SUCCESS) {
        const payload = event.payload as AuthenticationResult;
        if (payload.account) {
          msalInstance.setActiveAccount(payload.account);
        }
      }
    });
  });

  const router = useRouter();
  const navigationClient = new CustomNavigationClient(router);
  msalInstance.setNavigationClient(navigationClient);
  
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};