import "./global.css";
import { Inter } from "@next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haaremy",
  description: "Selfhosted by Jeremy Becker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
