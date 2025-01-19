import { ReactElement } from "react";
import Image from "next/image";

import HugeiconsCalendar03 from "@/icons/HugeiconsCalendar03";
import HugeiconsLocation04 from "@/icons/HugeiconsLocation04";
import HugeiconsShoppingBag02 from "@/icons/HugeiconsShoppingBag02";

import { AvailableEvent } from "@/lib/data";

import styles from "./event-card.module.css";

type Props = {
  eventsData: AvailableEvent;
};

export default function EventCardComponent({
  eventsData,
}: Props): ReactElement {
  return (
    <div className={styles["event-card"]}>
      <div className={styles.visuals}>
        {/* add sold out image here */}
        <Image
          src={eventsData.banner}
          alt={eventsData.title}
          width={2000}
          height={2000}
        />
        <div className={styles.badge}>{eventsData.city}</div>
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.writings}>
        <h3 className={styles.title}>{eventsData.title}</h3>
        <div className={styles.date}>
          <HugeiconsCalendar03 />
          <p>{eventsData.date}</p>
        </div>
        <div className={styles.location}>
          <HugeiconsLocation04 />
          <p>{eventsData.location}</p>
        </div>
      </div>
      <div className={styles.cta}>
        <button>
          <HugeiconsShoppingBag02 />
          خرید بلیط
        </button>
      </div>
    </div>
  );
}
