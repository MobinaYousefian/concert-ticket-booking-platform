"use client";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";

import { toast } from "react-toastify";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsShare08 from "@/icons/HugeiconsShare08";

import { DOMAIN_URL } from "@/lib/constants";

import { Activity } from "@/lib/data.type";

import styles from "./share.module.css";

type Props = {
  shareTitle: Activity["title"];
};

export default function ShareComponent({ shareTitle }: Props): ReactElement {
  const pathname = usePathname();
  const TARGET_URL = `${DOMAIN_URL}/${pathname}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(TARGET_URL).then(() => {
      toast.success("لینک اشتراک گذاری کپی شد", {
        toastId: `copy ${TARGET_URL}`,
      });
    });
  };

  const handleShare = () => {
    if (!navigator.share) {
      copyToClipboard();
    }

    navigator
      .share({ url: TARGET_URL, title: shareTitle })
      .then(() => {})
      .catch((error) => {
        console.log(error);
        copyToClipboard();
      });
  };

  return (
    <ButtonComponent
      shape={"ghost"}
      variant={"muted"}
      className={styles.share}
      onClick={handleShare}
    >
      <HugeiconsShare08 />
      <span>اشتراک ‌گذاری</span>
    </ButtonComponent>
  );
}
