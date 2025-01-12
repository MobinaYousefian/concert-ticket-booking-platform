import { ReactElement } from "react";

import EventCardComponent from "@/components/event-card/event-card.component";

import { eventsData } from "@/lib/data";

import styles from "./search.module.css";

export default function SearchPage(): ReactElement {
  return (
    <div className={styles.search}>
      <div className={styles.filters}>فیلترها</div>
      <ul className={styles.result}>
        {eventsData.map((event) => (
          <EventCardComponent key={event.id} eventsData={event} />
        ))}
      </ul>
    </div>
  );
}
