"use client";

import dynamic from "next/dynamic";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import {
  makeStyles,
  shorthands,
  webLightTheme,
} from "@fluentui/react-components";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const DynamicContextProvider = dynamic(
  () => import("@fluentui/react-components").then((mod) => mod.FluentProvider),
  { ssr: false }
);

const useStyles = makeStyles({
  toolbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  content: {},
  container: {
    height: "calc(100vh - 40px - 20px)",
    overflow: "scroll",
    ...shorthands.margin("10px"),
    flexGrow: 1,
  },
  mainContainer: {
    display: "flex",
  },
  sidePanel: {
    width: "280px",
    flexShrink: 0,
    "@media (max-width: 768px)": {
      display: "none",
    },
    backgroundColor: "#e9e9e9",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styles = useStyles();
  return (
    <html lang="en">
      <body>
        <DynamicContextProvider theme={webLightTheme}>
          <AuthProvider>
            <div className={styles.toolbar}><NavBar /></div>
            <div className={styles.mainContainer}>
              <div className={styles.sidePanel}>
                <SideBar/>
                {/* Side panel content here */}
              </div>
              <div className={styles.container}>
                <div className={styles.content}>{children}</div>
              </div>
            </div>
          </AuthProvider>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
