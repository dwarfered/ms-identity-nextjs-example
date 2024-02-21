import React from "react";
import { MsalAuthenticationResult } from "@azure/msal-react";

export const ErrorComponent = (error: MsalAuthenticationResult) => {
    return <h6 >An Error Occurred: {error ? error.error?.errorCode : "unknown error"}</h6>;
}