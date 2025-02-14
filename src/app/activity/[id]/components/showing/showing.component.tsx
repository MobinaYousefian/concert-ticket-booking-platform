import { ReactElement } from "react";

import { clsx } from "clsx";

import BuyButtonComponent from "@/app/activity/[id]/components/showing/buy-button/buy-button.component";

import { ActivityShowing } from "@/lib/data.type";

import HugeiconsCheckmarkCircle01 from "@/icons/HugeiconsCheckmarkCircle01";
import HugeiconsInformationCircle from "@/icons/HugeiconsInformationCircle";
import HugeiconsCancelCircle from "@/icons/HugeiconsCancelCircle";

import styles from "./showing.module.css";

const stock = {
  IN: {
    icon: <HugeiconsCheckmarkCircle01 className={styles.check} />,
    label: "موجودی: دارد",
  },
  LOW: {
    icon: <HugeiconsInformationCircle className={styles.notice} />,
    label: "موجودی: محدود",
  },
  OUT: {
    icon: <HugeiconsCancelCircle className={styles.destructive} />,
    label: "موجودی: ندارد",
  },
};

type Props = {
  showing: ActivityShowing;
};

export default function ShowingComponent({ showing }: Props): ReactElement {
  const remainingTickets = showing.remainingTickets;

  const weekday = showing.date.split(" ")[0];
  const month = showing.date.split(" ").slice(1, 3).join(" ");

  return (
    <div
      className={clsx(
        styles.showing,
        remainingTickets === 0 && styles.inactive,
      )}
    >
      <div className={styles.date}>
        <h3>
          <span>{weekday}</span>
          <span>{month}</span>
          <span className={styles.time}>ساعت: {showing.time}</span>
        </h3>
      </div>
      <div className={styles.info}>
        <div className={styles["remain-seats"]}>
          <span className={styles.amount}>
            صندلی‌های باقیمانده: {remainingTickets}
          </span>
          <span className={styles.stats}>
            {remainingTickets > 10 ? (
              <>
                {stock.IN.label} {stock.IN.icon}
              </>
            ) : remainingTickets <= 10 && remainingTickets !== 0 ? (
              <>
                {stock.LOW.label} {stock.LOW.icon}
              </>
            ) : (
              <>
                {stock.OUT.label} {stock.OUT.icon}
              </>
            )}
          </span>
        </div>
        <BuyButtonComponent
          remainingTickets={remainingTickets}
          showingId={showing.id}
        />
      </div>
    </div>
  );
}
