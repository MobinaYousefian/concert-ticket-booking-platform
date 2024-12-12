import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google'
import "./globals.css";
import React from "react";
import {NextFont} from "next/dist/compiled/@next/font";

const vazirmatn: NextFont = Vazirmatn({
    subsets: ['latin', 'arabic'],
    display: 'swap',
})

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
        {children}
      </body>
    </html>
  );
}
