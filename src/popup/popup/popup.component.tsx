"use client";
import React, {
  ComponentProps,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { clsx } from "clsx";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsCancel01 from "@/icons/HugeiconsCancel01";

import styles from "./popup.module.css";

export type PopupVariant = "default" | "success" | "warning" | "destructive";

type Props = ComponentProps<"div"> & {
  variant?: PopupVariant;
};

export default function PopupComponent({
  children,
  variant = "default",
  className,
  ...otherProps
}: Props): ReactElement | null {
  const [showPopup, setShowPopup] = useState<boolean>(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;
  return (
    <div
      className={clsx(styles.popup, styles[variant], className)}
      {...otherProps}
    >
      <div className={styles.close}>
        <ButtonComponent shape={"icon"} variant={"muted"} onClick={handleClose}>
          <HugeiconsCancel01 />
        </ButtonComponent>
        {children}
      </div>
    </div>
  );
}

export function openPopup({
  children,
  variant = "default",
  className = "",
  ...otherProps
}: Props): ReactNode | null {
  return (
    <PopupComponent
      className={clsx(styles.popup, styles[variant], className)}
      {...otherProps}
    >
      {children}
    </PopupComponent>
  );
}
