import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerProps,
  Accordion,
  Body1Strong,
} from "@fluentui/react-components";
import { Dismiss24Regular, NavigationRegular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";

import { HomeRegular } from "@fluentui/react-icons";
import { APP_NAME } from "@/lib/constants";
import { useGlobalStyles } from "@/lib/utils/fluentUiHelper";

type DrawerType = Required<DrawerProps>["type"];

export const NavOverlay = () => {
  const styles = useGlobalStyles();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [type] = React.useState<DrawerType>("overlay");

  return (
    <>
      <Button
        shape="square"
        size="large"
        className={styles.toolbarNavButton}
        appearance="primary"
        onClick={() => setIsOpen(!isOpen)}
        icon={<NavigationRegular />}
      >
        {type === "inline" ? "Toggle" : APP_NAME}
      </Button>
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
          <Accordion defaultOpenItems="1"></Accordion>
        </DrawerBody>
      </Drawer>
    </>
  );
};
