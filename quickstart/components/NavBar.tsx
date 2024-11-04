import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import {
  Button,
  makeStyles,
  shorthands,
  Toolbar,
  ToolbarGroup,
  DrawerProps,
} from "@fluentui/react-components";
// import SignInButton from "./SignInButton";
// import SignOutButton from "./SignOutButton";
import { useGlobalStyles } from "@/lib/utils/fluentUiHelper";
import { APP_NAME } from "@/lib/constants";
import { NavOverlay } from "./NavOverlay";
import SignInButton from "./SignInButton";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "space-between",
    backgroundColor: "#1c1c1c",
    ...shorthands.padding(0),
  },
  navMobileOverlay: {
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  navStandard: {
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
});

type DrawerType = Required<DrawerProps>["type"];

export const FarGroup = () => {
  const standardStyles = useGlobalStyles();
  const styles = useStyles();
  const [type] = React.useState<DrawerType>("overlay");

  return (
    <Toolbar aria-label="with Separeted Groups" className={styles.toolbar}>
      <ToolbarGroup role="presentation">
        <div className={styles.navMobileOverlay}>
          <NavOverlay />
        </div>
        <div className={styles.navStandard}>
          <Button
            shape="square"
            size="large"
            className={standardStyles.toolbarNavButton}
            appearance="primary"
          >
            {type === "inline" ? "Toggle" : APP_NAME}
          </Button>
        </div>
      </ToolbarGroup>
      <ToolbarGroup role="presentation">
        <UnauthenticatedTemplate>
          <SignInButton />
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
