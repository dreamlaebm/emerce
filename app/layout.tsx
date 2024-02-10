
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderBar from "./components/HeaderBar";
import { useState } from "react";
import Options from "./components/Options";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emerce App",
  description: "A example ecommerce app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderBar /> */}
        
        {children}
      </body>
    </html>
  );
}
