import { ReactElement } from "react";
import { notFound } from "next/navigation";

import { activity } from "@/lib/data";
import { Activity } from "@/lib/data.type";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props): Promise<ReactElement> {
  // const activityData =activity.find((item) => item.id === +params.id);

  const activityData = await getActivity(params.id);

  if (!activityData) {
    return notFound();
  }

  return <div>{activityData?.title}</div>;
}
async function getActivity(id: string): Promise<Activity | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = activity.find((item) => item.id === +id);
      resolve(result);
    }, 1000);
  });
}
