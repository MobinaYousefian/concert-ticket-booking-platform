import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import HugeiconsCalendar03 from "@/icons/HugeiconsCalendar03";
import HugeiconsLocation04 from "@/icons/HugeiconsLocation04";
import HugeiconsShoppingBag02 from "@/icons/HugeiconsShoppingBag02";

import { Activity } from "@/lib/data.type";

import styles from "./activity-card.module.css";

type Props = {
  activity: Activity;
};

export default function ActivityCardComponent({
  activity,
}: Props): ReactElement {
  const ACTIVITY_PAGE_URL = `/activity/${activity.id.toString()}`;

  return (
    <section className={styles["activity-card"]}>
      <div className={styles.visuals}>
        {/* todo: add sold out image here */}
        <Image
          src={activity.banner}
          alt={activity.title}
          width={500}
          height={500}
        />
        <div className={styles.badge}>{activity.city}</div>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.writings}>
        <h3 className={styles.title}>{activity.title}</h3>
        <div className={styles.date}>
          <HugeiconsCalendar03 />
          <p>{activity.date}</p>
        </div>
        <div className={styles.location}>
          <HugeiconsLocation04 />
          <p>{activity.location}</p>
        </div>
      </div>
      <div className={styles.cta}>
        <Link href={ACTIVITY_PAGE_URL}>
          <HugeiconsShoppingBag02 />
          خرید بلیط
        </Link>
      </div>
    </section>
  );
}
