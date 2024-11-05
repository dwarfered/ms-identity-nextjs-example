# Microsoft Authentication (MSAL) with Nextjs and Microsoft Graph.

<p align="center">
<img src="images/repository-open-graph-template.png" width="600"/>
</p>

An example showcasing the core principles of modern authentication using the Microsoft Identity Platform in Next.js version 14, utilizing MSAL React for client-side requests to Microsoft Graph.

The [Microsoft identity platform](https://docs.microsoft.com/azure/active-directory/develop/v2-overview), incorporating [Entra ID](https://learn.microsoft.com/en-au/entra/fundamentals/whatis) (Azure AD) and [Azure Azure Active Directory B2C](https://docs.microsoft.com/azure/active-directory-b2c/overview) (Azure AD B2C) plays a pivotal role in the Azure cloud ecosystem.
This example is designed to showcase the basics of modern authentication within a Nextjs framework, utilising the [Microsoft Authentication Library for React](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react) (MSAL React).

## Sample Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Next.js v14.2.16+](https://nextjs.org/docs/getting-started/installation)
- [Visual Studio Code](https://code.visualstudio.com/download)
- A modern web browser

## Recommendations

- [Next.js by Vercel](https://nextjs.org/docs) framework documentation.
- [Microsoft Authentication Library (MSAL) for JS](https://github.com/AzureAD/microsoft-authentication-library-for-js)
- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/) The official front-end framework for building experiences that fit seamlessly into Microsoft 365.
- [Dev Fluent UI](https://react.fluentui.dev/?path=/docs/concepts-introduction--docs) the developer resource.
- [SWR by Vercel](https://swr.vercel.app) React Hooks for Data Fetching
> :information_source: "SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data."
- [jwt.ms](https://jwt.ms) for inspecting your tokens.
- [SPA developers: Migrate implicit to auth code flow with PKCE](https://devblogs.microsoft.com/identity/migrate-to-auth-code-flow/)
- Follow the [Entra ID Blog](https://techcommunity.microsoft.com/t5/microsoft-entra-blog/bg-p/Identity) to stay up-to-date with the latest developments.

## Configure the application

- Open ./lib/msalConfig.ts in an editor.
- Replace Client and Authority for your created Entra Application Registration.

## Installing dependencies
```bash
# Install dependencies from the root of the repo
npm install
```
## Running the application
```bash
# Run locally
npm run dev

# Optionally build
npm run build
```

1. Open http://localhost:3000 to view in your browser.
2. Open http://localhost:3000/profile to view a protected route, that if signed in will display profile information.

## Screenshots

### Pending Sign In
<img src="images/image1.png" width="300">

### Sign In
<img src="images/image2.png" width="300">
