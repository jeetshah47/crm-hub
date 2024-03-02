import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./providers/Provider";
const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woorkroom CRM",
  description: "Crafted for teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
