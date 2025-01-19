"use client";
import { ReactElement, useContext } from "react";

import EventCardComponent from "@/components/event-card/event-card.component";

import { EventsContext } from "@/app/search/providers/events/events.provider";

// import styles from "./result.module.css";

export default function ResultComponent(): ReactElement {
  const { filteredEvents } = useContext(EventsContext);

  return (
    <>
      {filteredEvents.map((event) => (
        <EventCardComponent key={event.id} eventsData={event} />
      ))}
    </>
  );
}
