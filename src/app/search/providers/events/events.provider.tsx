"use client";
import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import { AvailableEvent } from "@/lib/data";

type ContextValue = {
  filteredEvents: AvailableEvent[];
};

export const EventsContext = createContext<ContextValue>({
  filteredEvents: [],
});

type Props = PropsWithChildren & {
  eventsData: AvailableEvent[];
};

export default function EventsProvider({
  children,
  eventsData,
}: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const [filteredEvents, setFilteredEvents] = useState<AvailableEvent[]>([]);

  const isVisible = useCallback(
    (event: AvailableEvent): boolean => {
      return (
        doesEventInclude(event, filters.query) &&
        doesInclude(event.eventType, filters.eventType) &&
        doesInclude(event.city, filters.city)
      );
    },
    [filters],
  );

  useEffect(() => {
    setFilteredEvents(eventsData.filter(isVisible));
  }, [isVisible, eventsData]);

  return (
    <EventsContext.Provider value={{ filteredEvents }}>
      {children}
    </EventsContext.Provider>
  );
}

function doesEventInclude(event: AvailableEvent, query?: string): boolean {
  if (!query) {
    return true;
  }

  return doesSomeInclude(
    [event.title, event.location, event.eventType, event.city, event.date],
    query,
  );
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }

  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item: string, query?: string): boolean {
  if (!query) {
    return true;
  }

  return item.toLowerCase().includes(query.toLowerCase());
}
