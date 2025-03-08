import React from "react";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent className="padding" />
      <main className="padding">{children}</main>
      <p className="tagline padding">
        رزرو بلیت، اطلاع از آخرین کنسرت‌ها و نمایش‌های هنری
      </p>
      <FooterComponent className="padding" />
    </>
  );
}
