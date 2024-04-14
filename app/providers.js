/**
 * NextAuthProviders  wraps the application with a SessionProvider from next-auth/react.
 * This component ensures that authentication session information is available to child components.
 */

"use client";
import { SessionProvider } from "next-auth/react";

export const NextAuthProviders = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
