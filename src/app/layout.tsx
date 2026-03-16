import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diptaverse Portfolio",
  description: "Portfolio of Dipta Brata Das",
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