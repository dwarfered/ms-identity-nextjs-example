import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Body1,
  Body1Strong,
  Button,
  Divider,
  Toolbar,
  ToolbarGroup,
} from "@fluentui/react-components";
import { AppsListRegular, HomeRegular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";

export default function NavMenu() {
  const router = useRouter();

  return (
    <Toolbar aria-label="with Separeted Groups">
      <ToolbarGroup role="presentation" style={{ width: "100%" }}>
        <Button
          onClick={() => {
            router.push("/");
          }}
          shape="square"
          appearance="subtle"
          icon={<HomeRegular />}
          style={{
            width: "100%",
            justifyContent: "flex-start", // This aligns the button content to the left
            display: "flex", // Ensures flexbox layout for content alignment
          }}
        >
          <Body1Strong> Home</Body1Strong>
        </Button>
        <Divider />

        <AuthenticatedTemplate>
          <Accordion defaultOpenItems="1">
            <AccordionItem value="1">
              <AccordionHeader
                icon={<AppsListRegular />}
                expandIconPosition="end"
              >
                <Body1Strong>Quickstart</Body1Strong>
              </AccordionHeader>
              <AccordionPanel>
                <Button
                  onClick={() => {
                    router.push("/profile");
                  }}
                  shape="square"
                  appearance="subtle"
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  <Body1>My profile</Body1>
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AuthenticatedTemplate>
      </ToolbarGroup>
      <ToolbarGroup role="presentation"></ToolbarGroup>
    </Toolbar>
  );
}
