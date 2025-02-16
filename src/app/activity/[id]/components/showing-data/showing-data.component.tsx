"use client";
import { ReactElement } from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";

import SectionCardComponent from "@/app/activity/[id]/components/section-card/section-card.component";
import ActivityInfoComponent from "@/app/activity/[id]/components/activity-info/activity-info.component";

import { showingsData } from "@/lib/showings-data";

import styles from "./showing-data.module.css";

export default function ShowingDataComponent(): ReactElement | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const showingIdParam = searchParams.get("showingId");

  const showingData = showingsData.find(
    (showing) => showing.id.toString() === showingIdParam,
  );
  if (!showingData) redirect(pathname);

  const activityData = showingData.activityData;

  return (
    <SectionCardComponent>
      <div className={styles["showing-data"]}>
        <ActivityInfoComponent
          activityData={{
            ...activityData,
            time: showingData.time,
            date: showingData.date,
          }}
        />
      </div>
    </SectionCardComponent>
  );
}
