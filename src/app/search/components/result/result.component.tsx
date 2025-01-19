import { ReactElement } from "react";

import EventCardComponent from "@/components/event-card/event-card.component";

import { eventsData } from "@/lib/data";

import styles from "./result.module.css";

export default function ResultComponent(): ReactElement {
  return (
    <>
      {eventsData.map((event) => (
        <EventCardComponent key={event.id} eventsData={event} />
      ))}
    </>
  );
}
