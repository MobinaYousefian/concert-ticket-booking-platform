"use client";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";

import ButtonComponent from "@/components/button/button.component";
import { openPopup } from "@/components/popup/popup.component";

import HugeiconsShare08 from "@/icons/HugeiconsShare08";

import styles from "./share.module.css";

const DOMAIN_URL = "https://tamashachi.vercel.app";

export default function ShareComponent(): ReactElement {
  const pathname = usePathname();
  const TARGET_URL = `${DOMAIN_URL}/${pathname}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(TARGET_URL).then(() => {
      openPopup({});
      /* temp alert */
      alert("لینک اشتراک گذاری کپی شد ✅");
    });
  };

  const handleShare = () => {
    copyToClipboard();
  };

  return (
    <>
      <ButtonComponent
        shape={"ghost"}
        variant={"muted"}
        className={styles.share}
        onClick={handleShare}
      >
        <HugeiconsShare08 />
        <span>اشتراک ‌گذاری</span>
      </ButtonComponent>
    </>
  );
}
