import { ReactElement } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

import ActivityDetailComponent from "@/app/activity/[id]/components/activity-detail/activity-detail.component";
import ShowingCardComponent from "@/app/activity/[id]/components/showing-card/showing-card.component";
import ShowingDataComponent from "@/app/activity/[id]/components/showing-data/showing-data.component";

import { activity } from "@/lib/activity-data";

import { normalizeSearchParam } from "@/utils/functions";

import { ShowingId } from "@/types/showingId.type";
import { SearchParams } from "@/types/search-param.type";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
  searchParams: SearchParams;
};

export default function Page({ params, searchParams }: Props): ReactElement {
  const activityData = activity.find(
    (item) => item.id.toString() === params.id,
  );

  const defaultShowingId = generateDefaultShowingId(searchParams);

  if (!activityData) return notFound();
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Image
          src={activityData.banner}
          alt={activityData.title}
          width={600}
          height={900}
          priority
        />
      </div>
      {!defaultShowingId ? (
        <>
          <ActivityDetailComponent activityData={activityData} />
          <section className={styles.showings}>
            <div className={"section-heading"}>
              <h2>انتخاب سانس</h2>
            </div>
            <div className={styles["showing-card"]}>
              {activityData.showings.map((showing) => (
                <ShowingCardComponent key={showing.id} showing={showing} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <ShowingDataComponent />
      )}
    </div>
  );
}

function generateDefaultShowingId(searchParams: SearchParams): ShowingId {
  const { showingId } = searchParams;
  return normalizeSearchParam(showingId);
}
