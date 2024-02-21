import { msalInstance } from "@/app/_app";

export default function SignOutButton() {
  const handleLogout = (logoutType: string) => {
    if (logoutType === "popup") {
      msalInstance.logoutPopup().catch((e) => {
        console.error(`logoutPopup failed: ${e}`);
      });
    } else if (logoutType === "redirect") {
      msalInstance.logoutRedirect().catch((e) => {
        console.error(`logoutRedirect failed: ${e}`);
      });
    }
  };

  return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleLogout("popup")}
      >
        Log Out
      </button>
  );
}
