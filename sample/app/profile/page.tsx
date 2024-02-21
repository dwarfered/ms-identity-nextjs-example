"use client";

import { loginRequest } from "@/authConfig";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
  InteractionType,
} from "@azure/msal-browser";
import Link from "next/link";
import { ErrorComponent } from "@/components/ErrorComponent";
import { Loading } from "@/components/Loading";
import { ProfileData } from "@/components/ProfileData";

export default function Profile() {
  const authRequest = {
    ...loginRequest,
  };

  return (
    <>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Popup}
        authenticationRequest={authRequest}
        errorComponent={ErrorComponent}
        loadingComponent={Loading}
      >
        <ProfileData />
      </MsalAuthenticationTemplate>
      <Link className="text-blue-500 hover:text-blue-800" href="/">
        Back
      </Link>
    </>
  );
}
