import { ReactElement } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

import ActivityInfoComponent from "@/app/activity/[id]/components/activity-info/activity-info.component";
import SessionsComponent from "@/app/activity/[id]/components/sessions/sessions.component";

import { activity } from "@/lib/data";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const activityData = activity.find(
    (item) => item.id.toString() === params.id,
  );

  if (!activityData) {
    return notFound();
  }

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
      <ActivityInfoComponent activityData={activityData} />
      <section className={styles.sessions}>
        {activityData.sessions.map((session) => (
          <SessionsComponent key={session.id} session={session} />
        ))}
      </section>
    </div>
  );
}
