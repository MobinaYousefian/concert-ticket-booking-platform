"use client";
import { ReactElement, useContext } from "react";

import { PopoverContext } from "@/app/activity/[id]/providers/popover/popover.provider";

import styles from "./popover.module.css";

export default function PopoverComponent(): ReactElement | null {
  const { popoverData } = useContext(PopoverContext);

  if (!popoverData) return null;
  return (
    <div
      className={styles.popover}
      style={{
        insetInlineEnd: popoverData.position.x + 20 + "px",
        insetBlockStart: popoverData.position.y + 20 + "px",
      }}
    >
      {popoverData.seatLabel}
      <div className={styles.price}>
        قیمت صندلی: {popoverData.seatPrice.toLocaleString()}
      </div>
    </div>
  );
}
