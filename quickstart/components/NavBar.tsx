import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import {
  Button,
  Drawer,
  makeStyles,
  shorthands,
  tokens,
  Toolbar,
  ToolbarGroup,
  ToolbarProps,
  typographyStyles,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerProps,
  Accordion,
  Body1Strong,
} from "@fluentui/react-components";
// import SignInButton from "./SignInButton";
// import SignOutButton from "./SignOutButton";
import { Dismiss24Regular, NavigationRegular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";

import { AppsListRegular, HomeRegular } from "@fluentui/react-icons";
import { useGlobalStyles } from "@/app/lib/utils/fluentUiHelper";
import { APP_NAME } from "@/app/lib/constants";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "space-between",
    backgroundColor: "#1c1c1c",
    ...shorthands.padding(0),
  },
  toolbarButton: {
    backgroundColor: "#1c1c1c",
    color: tokens.colorBrandBackgroundInverted,
    ...typographyStyles.body1Strong,
    ":hover:active": {
      backgroundColor: "#333",
      color: "#fff",
    },
    ":hover": {
      backgroundColor: "#333",
      color: "#fff",
    },
    "@media (min-width: 768px)": {
      display: "none", 
    },
  },
  toolbarButton2: {
    backgroundColor: "#1c1c1c",
    color: tokens.colorBrandBackgroundInverted,
    ...typographyStyles.body1Strong,
    ":hover:active": {
      backgroundColor: "#333",
      color: "#fff",
    },
    ":hover": {
      backgroundColor: "#333",
      color: "#fff",
    },
    "@media (max-width: 768px)": {
      display: "none", 
    },
  },
});

type DrawerType = Required<DrawerProps>["type"];

export const FarGroup = (props: Partial<ToolbarProps>) => {
  const standardStyles = useGlobalStyles();
  const styles = useStyles();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [type, setType] = React.useState<DrawerType>("overlay");

  return (
    <Toolbar aria-label="with Separeted Groups" className={styles.toolbar}>
      <ToolbarGroup role="presentation">
        <Drawer
          type={type}
          separator
          open={isOpen}
          onOpenChange={(_, { open }) => setIsOpen(open)}
        >
          <DrawerHeader>
            <DrawerHeaderTitle
              action={
                <Button
                  appearance="subtle"
                  aria-label="Close"
                  icon={<Dismiss24Regular />}
                  onClick={() => setIsOpen(false)}
                />
              }
            >
              {APP_NAME}
            </DrawerHeaderTitle>
          </DrawerHeader>

          <DrawerBody>
            <Button
              onClick={() => {
                router.push("/");
                setIsOpen(false);
              }}
              appearance="subtle"
              icon={<HomeRegular />}
              style={{
                width: "100%",
                justifyContent: "flex-start", 
                display: "flex", 
              }}
            >
              <Body1Strong> Home</Body1Strong>
            </Button>
            <Accordion defaultOpenItems="1">
         
            </Accordion>
          </DrawerBody>
        </Drawer>

        <Button
          shape="square"
          size="large"
          className={styles.toolbarButton}
          appearance="primary"
          onClick={() => setIsOpen(!isOpen)}
          icon={<NavigationRegular />}
        >
          {type === "inline" ? "Toggle" : APP_NAME}
        </Button>

        <Button
          shape="square"
          size="large"
          className={styles.toolbarButton2}
          appearance="primary"
        >
          {type === "inline" ? "Toggle" : APP_NAME}
        </Button>
      </ToolbarGroup>
      <ToolbarGroup role="presentation">
        {/* <SignInSignOutButton /> */}
        <UnauthenticatedTemplate>
          {/* <SignInButton /> */}
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>{/* <SignOutButton /> */}</AuthenticatedTemplate>
      </ToolbarGroup>
    </Toolbar>
  );
};

const NavBar = () => {
  return <FarGroup />;
};

export default NavBar;
