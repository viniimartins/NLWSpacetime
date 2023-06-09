import React from "react";
import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-Jamjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description: "Uma cápsula do tempo contruido com REact, Next.js, Ta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  ${baiJamjuree.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
