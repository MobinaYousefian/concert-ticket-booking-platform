import { ReactElement } from "react";

import { eventsData } from "@/lib/data";

import styles from "./search.module.css";
import Image from "next/image";

export default function SearchPage(): ReactElement {
  return (
    <div className={styles.search}>
      <div className={styles.filters}>فیلترها</div>
      <ul className={styles.result}>
        {eventsData.map((event) => (
          <li key={event.id} className={styles.card}>
            <div className={styles.visuals}>
              <Image
                src={event.banner}
                alt={event.title}
                width={2000}
                height={2000}
              />
              <div className={styles.badge}>{event.city}</div>
              <div className={styles.gradient}></div>
            </div>
            <div className={styles.writings}>
              <h3 className={styles.title}>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
