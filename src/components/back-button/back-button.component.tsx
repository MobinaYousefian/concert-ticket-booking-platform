"use client";
import { ComponentProps, ReactElement } from "react";
import { useRouter } from "next/navigation";

import { clsx } from "clsx";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsArrowRight02 from "@/icons/HugeiconsArrowRight02";

import styles from "./back-button.module.css";

type Props = ComponentProps<"button"> & {
  backUrl: string;
};

export default function BackButtonComponent({
  backUrl,
  className,
  ...otherProps
}: Props): ReactElement {
  const router = useRouter();

  const setBackUrl = () => {
    router.push(backUrl);
  };

  return (
    <ButtonComponent
      shape="icon"
      variant="muted"
      className={clsx(styles["back-button"], className)}
      onClick={setBackUrl}
      {...otherProps}
    >
      <HugeiconsArrowRight02 />
      بازگشت
    </ButtonComponent>
  );
}
