"use client";
import { ReactElement, useContext } from "react";

import { clsx } from "clsx";

import PriceButtonComponent from "@/app/activity/[id]/components/price-button/price-button.component";
import CtaSectionComponent from "@/app/activity/[id]/components/book-stats/cta-section/cta-section.component";

import { SeatsContext } from "@/app/activity/[id]/providers/seats/seats.provider.component";

import { SEAT_TAX_PERCENTAGE } from "@/lib/constants";

import styles from "./book-stats.module.css";

type Hint = {
  value: string;
  label: string;
  colorClass: string;
};

const hints: Hint[] = [
  {
    value: "booked",
    label: "فروخته شده",
    colorClass: "booked",
  },
  {
    value: "pending",
    label: "رزرو",
    colorClass: "pending",
  },
  {
    value: "free",
    label: "قابل خرید",
    colorClass: "free",
  },
  {
    value: "nonSale",
    label: "غیر قابل خرید",
    colorClass: "non-sale",
  },
  {
    value: "selected",
    label: "انتخاب شما",
    colorClass: "selected",
  },
];

export type CurrentShowingSelectData = {
  activityId: number;
  showingId: number;
  time: string;
  date: string;
};
type Props = {
  currentShowingSelectData: CurrentShowingSelectData;
};

export default function BookStatsComponent({
  currentShowingSelectData,
}: Props): ReactElement {
  const { seats } = useContext(SeatsContext);

  const finalPrice = seats.reduce((prev, curr) => {
    const tax = curr.seatPrice * SEAT_TAX_PERCENTAGE;

    return prev + curr.seatPrice + tax;
  }, 0);

  return (
    <div className={styles["book-stats"]}>
      <div className={styles.writings}>
        <PriceButtonComponent remainingShowings={1} />
        <div className={styles["seatNumbers"]}>
          تعداد صندلی‌های انتخاب شده: {seats.length}
        </div>
        <div className={styles.hint}>
          {hints.map(({ value, label, colorClass }) => (
            <div key={value} className={styles.container}>
              <div className={clsx(styles.circle, styles[colorClass])}></div>
              <span className={clsx(styles.label, styles[colorClass])}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={"block-perforations"}></div>
      <div className={"inline-perforations"}></div>
      <CtaSectionComponent
        finalPrice={finalPrice}
        currentShowingSelectData={currentShowingSelectData}
      />
    </div>
  );
}
