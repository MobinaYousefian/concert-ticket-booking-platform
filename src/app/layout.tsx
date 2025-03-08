import React from "react";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";

import "@/styles/typography.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "تماشاچی | خرید آنلاین بلیت کنسرت و تئاتر",
  description: "با یک کلیک، تماشاچی کنسرت‌ها و نمایش‌های شهر خود باشید.",
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
        {children}
        <DynamicToastComponent />
      </body>
    </html>
  );
}
