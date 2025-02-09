import { ReactElement } from "react";

import { clsx } from "clsx";

import ButtonComponent from "@/components/button/button.component";

import { ActivitySession } from "@/lib/data.type";

import HugeiconsCheckmarkCircle01 from "@/icons/HugeiconsCheckmarkCircle01";
import HugeiconsInformationCircle from "@/icons/HugeiconsInformationCircle";
import HugeiconsCancelCircle from "@/icons/HugeiconsCancelCircle";
import HugeiconsShoppingBag02 from "@/icons/HugeiconsShoppingBag02";

import styles from "./sessions.module.css";

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
  session: ActivitySession;
};

export default function SessionsComponent({ session }: Props): ReactElement {
  const remainingTickets = session.remainingTickets;

  const weekday = session.date.split(" ")[0];
  const month = session.date.split(" ").slice(1, 3).join(" ");

  return (
    <div
      className={clsx(styles.card, remainingTickets === 0 && styles.inactive)}
    >
      <div className={styles.date}>
        <h3>
          <span>{weekday}</span>
          <span>{month}</span>
          <span className={styles.time}>ساعت: {session.time}</span>
        </h3>
      </div>
      <div className={styles.info}>
        <div className={styles["remain-seats"]}>
          <span className={styles.amount}>
            صندلی‌های باقیمانده: {session.remainingTickets}
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
        <ButtonComponent disabled={remainingTickets === 0}>
          <HugeiconsShoppingBag02 />
          خرید بلیت
        </ButtonComponent>
      </div>
    </div>
  );
}
