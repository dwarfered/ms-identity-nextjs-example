"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./_app";

const inter = Inter({ subsets: ["latin"] });

// The MsalProvider service will not work if defined in _app.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MsalProvider instance={msalInstance}>{children}</MsalProvider>
      </body>
    </html>
  );
}
