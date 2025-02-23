import React from "react";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

import "@/styles/typography.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "تماشاچی | خرید آنلاین بلیت کنسرت و تئاتر",
  description: "با یک کلید، تماشاچی کنسرت‌ها و نمایش‌های شهر خود باشید.",
};

export const viewport: Viewport = {
  themeColor: "#115E59",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const DynamicToastComponent = dynamic(
    () =>
      import("@/components/toastify-container/toastify-container.component"),
  );

  return (
    <html lang="fa" dir={"rtl"}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          رزرو بلیت، اطلاع از آخرین کنسرت‌ها و نمایش‌های هنری
        </p>
        <FooterComponent />
        <DynamicToastComponent />
      </body>
    </html>
  );
}
