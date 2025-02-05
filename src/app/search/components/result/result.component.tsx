"use client";
import { ReactElement, useContext } from "react";

import ActivityCardComponent from "@/components/activity-card/activity-card.component";
import NoDataComponent from "@/app/search/components/no-data/no-data.component";

import { activityContext } from "@/app/search/providers/activity/activity.provider";

import styles from "./result.module.css";

export default function ResultComponent(): ReactElement {
  const { filteredActivity } = useContext(activityContext);

  if (filteredActivity.length === 0) return <NoDataComponent />;
  return (
    <div className={styles.result}>
      {filteredActivity.map((activity) => (
        <ActivityCardComponent key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
