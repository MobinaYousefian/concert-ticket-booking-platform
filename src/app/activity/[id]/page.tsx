import { ReactElement } from "react";
import { notFound } from "next/navigation";

import { activity } from "@/lib/data";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const activityData = activity.find((item) => item.id === +params.id);

  if (!activityData) {
    return notFound();
  }

  return <div>{activityData?.title}</div>;
}
