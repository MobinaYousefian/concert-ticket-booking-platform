"use client";
import { ReactElement, useContext } from "react";

import { EventsContext } from "@/app/search/providers/events/events.provider";

import { faNumber } from "@/lib/utils";

import styles from "./stats.module.css";

export default function StatsComponent(): ReactElement {
  const { filteredEvents } = useContext(EventsContext);

  return (
    <div className={styles.stats}>
      {faNumber(filteredEvents.length.toLocaleString())} نتیجه
    </div>
  );
}
