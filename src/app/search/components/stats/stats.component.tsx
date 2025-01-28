"use client";
import { ReactElement, useContext } from "react";

import { activityContext } from "@/app/search/providers/activity/activity.provider";

import styles from "./stats.module.css";

export default function StatsComponent(): ReactElement {
  const { filteredActivity } = useContext(activityContext);

  return (
    <div className={styles.stats}>
      {filteredActivity.length.toLocaleString()} نتیجه
    </div>
  );
}
