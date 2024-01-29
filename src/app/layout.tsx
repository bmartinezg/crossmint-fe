import type { Metadata } from "next";
import "./globals.css";
import { NextUICustomProvider } from "@/modules/shared/next-ui/NextUICustomProvider";

export const metadata: Metadata = {
  title: "Crossmint - Bruno Martínez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUICustomProvider>{children}</NextUICustomProvider>
      </body>
    </html>
  );
}
