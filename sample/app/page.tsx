"use client";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";

export default function Home() {
  return (
    <>
      <AuthenticatedTemplate>
        <ul>
          <li>
            <SignOutButton />
          </li>
          <li>
            <Link className="text-blue-500 hover:text-blue-800" href="/profile">
              Request Profile Information
            </Link>
          </li>
        </ul>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <ul>
          <li>
            <SignInButton />
          </li>
          <li>Please sign-in to see your profile information</li>
        </ul>
      </UnauthenticatedTemplate>

      <Link className="text-blue-500 hover:text-blue-800" href="/example">
        Example Unauthenticated Page
      </Link>
    </>
  );
}
