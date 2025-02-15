import { ReactElement } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

import ActivityInfoComponent from "@/app/activity/[id]/components/activity-info/activity-info.component";
import ShowingCardComponent from "@/app/activity/[id]/components/showing-card/showing-card.component";

import { activity } from "@/lib/data";

import { ShowingId } from "@/types/showingId.type";

import { normalizeSearchParam } from "@/utils/functions";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

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
      {defaultShowingId !== undefined ? (
        <div>اطلاعات این سانس</div>
      ) : (
        <>
          <ActivityInfoComponent activityData={activityData} />
          <section className={styles.showings}>
            <div className={styles["showing-header"]}>
              <h2>انتخاب سانس</h2>
            </div>
            <div className={styles["showing-card"]}>
              {activityData.showings.map((showing) => (
                <ShowingCardComponent key={showing.id} showing={showing} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function generateDefaultShowingId(searchParams: SearchParams): ShowingId {
  const { showingId } = searchParams;
  return normalizeSearchParam(showingId);
}
