import { ReactElement } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

import ActivityInfoComponent from "@/app/activity/[id]/components/activity-info/activity-info.component";
import SessionComponent from "@/app/activity/[id]/components/session/session.component";

import { SessionId } from "@/types/filters.type";

import { activity } from "@/lib/data";

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

  const defaultSessionId = generateDefaultSessionId(searchParams);

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
      {defaultSessionId !== undefined ? (
        <div>اطلاعات این سانس</div>
      ) : (
        <>
          <ActivityInfoComponent activityData={activityData} />
          <section className={styles.sessions}>
            {activityData.sessions.map((session) => (
              <SessionComponent key={session.id} session={session} />
            ))}
          </section>
        </>
      )}
    </div>
  );
}

function generateDefaultSessionId(searchParams: SearchParams): SessionId {
  const { sessionId } = searchParams;
  return normalizeSearchParam(sessionId);
}
