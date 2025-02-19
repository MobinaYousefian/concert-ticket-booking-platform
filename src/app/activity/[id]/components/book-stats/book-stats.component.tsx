"use client";
import { ReactElement, useContext } from "react";

import { clsx } from "clsx";

import { SeatsContext } from "@/app/activity/[id]/providers/seats/seats.provider.component";
import PriceButtonComponent from "@/app/activity/[id]/components/price-button/price-button.component";
import CtaSectionComponent from "@/app/activity/[id]/components/book-stats/cta-section/cta-section.component";

import styles from "./book-stats.module.css";

type Hint = {
  value: string;
  label: string;
  color: string;
};
const hints: Hint[] = [
  {
    value: "booked",
    label: "فروخته شده",
    color: "-destructive",
  },
  {
    value: "pending",
    label: "رزرو",
    color: "-warning",
  },
  {
    value: "free",
    label: "قابل خرید",
    color: "-success",
  },
  {
    value: "nonSale",
    label: "غیر قابل خرید",
    color: "-seat-nonSale",
  },
  {
    value: "selected",
    label: "انتخاب شما",
    color: "-seat-selected",
  },
];

export default function BookStatsComponent(): ReactElement {
  const { seats } = useContext(SeatsContext);

  const finalPrice = seats.reduce((prev, curr) => {
    return curr.seatPrice * 0.1 + curr.seatPrice + prev;
  }, 0);

  return (
    <div className={styles["book-stats"]}>
      <div className={styles.writings}>
        <PriceButtonComponent remainingShowings={1} />
        <div className={styles["seatNumbers"]}>
          تعداد صندلی‌های انتخاب شده: {seats.length}
        </div>
        <div className={styles.hint}>
          {hints.map(({ value, label, color }) => (
            <div key={value} className={styles.container}>
              <div
                style={{ backgroundColor: `var(--color${color})` }}
                className={styles.circle}
              ></div>
              <span
                style={{ color: `var(--color${color})` }}
                className={styles.label}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={clsx("perforations", styles["block-perforations"])}></div>
      <div
        className={clsx("perforations", styles["inline-perforations"])}
      ></div>
      <CtaSectionComponent finalPrice={finalPrice} />
    </div>
  );
}
