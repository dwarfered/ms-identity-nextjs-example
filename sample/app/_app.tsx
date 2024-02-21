"use client";

import React from "react";
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  PublicClientApplication,
} from "@azure/msal-browser";
import { useRouter } from "next/navigation";
import { AppProps } from "next/app";
import { CustomNavigationClient } from "@/utils/NavigationClient";
import { msalConfig } from "@/authConfig";
export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS) {
      // Check if event.payload is of type AuthenticationResult
      const payload = event.payload as AuthenticationResult; // Type assertion
      if (payload.account) {
        msalInstance.setActiveAccount(payload.account);
      }
    }
  });
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const navigationClient = new CustomNavigationClient(router);
  msalInstance.setNavigationClient(navigationClient);
  return (
      <Component {...pageProps} />
  );
}
