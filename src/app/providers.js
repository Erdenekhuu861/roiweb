"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import AuthProvider from "@/context/main";
export function Providers({ children }) {
  return <SessionProvider>
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark"
      enableSystem
    >
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  </SessionProvider>;
}
