import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modifiles",
  description: "One stop for all file modifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
