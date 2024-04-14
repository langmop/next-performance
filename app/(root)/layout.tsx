import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "next performance",
  description: "Testing next performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        navbar
        {children}
        footer
      </body>
    </html>
  );
}
