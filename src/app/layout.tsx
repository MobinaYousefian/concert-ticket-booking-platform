import React from "react";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "تماشاچی | خرید آنلاین بلیط کنسرت و تئاتر",
  description: "با یک کلید، تماشاچی کنسرت‌ها و نمایش‌های شهر خود باشید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir={"rtl"} className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
