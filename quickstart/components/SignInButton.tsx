import { useGlobalStyles } from "@/lib/utils/fluentuiHelper";
import { handleSignIn } from "@/lib/utils/msalHelper";
import {
  Avatar,
  Button,
} from "@fluentui/react-components";


export default function SignInButton() {
  const styles = useGlobalStyles();

  return (
    <Button
      className={styles.toolbarNavButton}
      size="small"
      shape="square"
      appearance="primary"
      style={{ minWidth: 0, columnGap: "8px" }}
      onClick={() => handleSignIn()}
    >
      Sign In
      <Avatar name={undefined} image={undefined} />
    </Button>
  );
}
