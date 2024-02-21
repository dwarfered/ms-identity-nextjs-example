import { msalInstance } from "@/app/_app";
import { loginRequest } from "@/authConfig";

export default function SignInButton() {
  const handleLogin = (loginType: string) => {
    if (loginType === "popup") {
      msalInstance.loginPopup(loginRequest).catch((e) => {
        console.error(`loginPopup failed: ${e}`);
      });
    } else if (loginType === "redirect") {
      msalInstance.loginRedirect(loginRequest).catch((e) => {
        console.error(`loginRedirect failed: ${e}`);
      });
    }
  };

  // loginRedirect does not work in NextJS v14.1.0
  return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleLogin("popup")}
      >
        Sign In
      </button>
  );
}
