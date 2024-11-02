"use client";

import dynamic from "next/dynamic";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { webLightTheme } from "@fluentui/react-components";

const DynamicContextProvider = dynamic(
  () => import("@fluentui/react-components").then((mod) => mod.FluentProvider),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DynamicContextProvider theme={webLightTheme}>
          <AuthProvider>{children}</AuthProvider>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
