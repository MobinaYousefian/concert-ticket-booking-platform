"use client";
import { ReactElement } from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";

import { clsx } from "clsx";

import SectionCardComponent from "@/app/activity/[id]/components/section-card/section-card.component";
import ActivityInfoComponent from "@/app/activity/[id]/components/activity-info/activity-info.component";
import PriceButtonComponent from "@/app/activity/[id]/components/price-button/price-button.component";
import SeatMapComponent from "@/app/activity/[id]/components/seat-map/seat-map.component";

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
    <>
      <div className={styles["showing-data"]}>
        <SectionCardComponent className={styles.info}>
          <ActivityInfoComponent
            activityData={{
              ...activityData,
              time: showingData.time,
              date: showingData.date,
            }}
          />
        </SectionCardComponent>
        <div className={"section-heading"}>
          <h2>انتخاب صندلی</h2>
        </div>
        <SectionCardComponent>
          <div className={styles.tickets}>
            <PriceButtonComponent remainingShowings={1} />
            <div
              className={clsx("perforations", styles["block-perforations"])}
            ></div>
            <div></div>
          </div>
        </SectionCardComponent>
      </div>
      <SeatMapComponent />
    </>
  );
}
