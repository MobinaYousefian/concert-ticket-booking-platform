"use client";
import { ReactElement, useContext } from "react";

import { PopoverContext } from "@/app/(application)/activity/[id]/providers/popover/popover.provider";

import styles from "./popover.module.css";

type Props = {
  canvasWidth: number;
};

export default function PopoverComponent({
  canvasWidth,
}: Props): ReactElement | null {
  const { popoverData } = useContext(PopoverContext);
  if (!popoverData) return null;

  const handleSetPosition = () => {
    const halfWidth = canvasWidth / 2;
    let insetInline = popoverData.position.x;

    if (popoverData.position.x > halfWidth) {
      insetInline = popoverData.position.x - 128;
    }

    return {
      insetInlineEnd: insetInline,
      insetBlockStart: popoverData.position.y - 92,
    };
  };

  return (
    <div className={styles.popover} style={handleSetPosition()}>
      {popoverData.seatLabel}
      <div className={styles.price}>
        قیمت صندلی: {popoverData.seatPrice.toLocaleString()}
      </div>
    </div>
  );
}
