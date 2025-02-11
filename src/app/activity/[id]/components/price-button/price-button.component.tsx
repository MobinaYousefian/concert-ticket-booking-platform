"use client";
import { ReactElement, useState } from "react";
import dynamic from "next/dynamic";

import { Activity } from "@/lib/data.type";

import { openModal } from "@/utils/functions";

import styles from "./price-button.module.css";

type Props = {
  remainingSessions: Activity["remainingSessions"];
};

export default function PriceButtonComponent({
  remainingSessions,
}: Props): ReactElement {
  const DynamicModal = dynamic(
    () =>
      import(
        "@/app/activity/[id]/modals/price-list-modal/price-list-modal.component"
      ),
  );

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className={styles["price-button"]}>
      <button
        disabled={remainingSessions === 0}
        onClick={() => openModal<boolean>(setShowModal, true)}
      >
        لیست قیمت بلیت‌ها
        {" " + ">"}
        <div className={styles.underline}></div>
      </button>
      {showModal && <DynamicModal setShowModal={setShowModal} />}
    </div>
  );
}
