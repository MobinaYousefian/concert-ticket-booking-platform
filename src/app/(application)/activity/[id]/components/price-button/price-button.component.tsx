"use client";
import { ReactElement, useState } from "react";
import { clsx } from "clsx";

import { Activity } from "@/lib/data.type";

import PriceListModalComponent from "@/app/(application)/activity/[id]/modals/price-list-modal/price-list-modal.component";
import ButtonComponent from "@/components/button/button.component";

import { openModal } from "@/utils/modal.utils";

import styles from "./price-button.module.css";

type Props = {
  remainingShowings: Activity["remainingShowings"];
};

export default function PriceButtonComponent({
  remainingShowings,
}: Props): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        styles["price-button"],
        remainingShowings === 0 && styles.hide,
      )}
    >
      <ButtonComponent
        className={styles.button}
        shape="outline"
        variant="muted"
        onClick={() => openModal<boolean>(setShowModal, true)}
      >
        لیست قیمت بلیت‌ها
        <span className={styles.arrow}>{" " + ">"}</span>
      </ButtonComponent>
      {showModal && <PriceListModalComponent setShowModal={setShowModal} />}
    </div>
  );
}
