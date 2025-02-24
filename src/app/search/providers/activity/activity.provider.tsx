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

import { Activity } from "@/lib/data.type";

type ContextValue = {
  filteredActivity: Activity[];
};

export const activityContext = createContext<ContextValue>({
  filteredActivity: [],
});

type Props = PropsWithChildren & {
  activity: Activity[];
};

export default function ActivityProvider({
  children,
  activity,
}: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const isVisible = useCallback(
    (activity: Activity): boolean => {
      return (
        doesActivityInclude(activity, filters.query) &&
        doesInclude(activity.activityType, filters.activityType) &&
        doesInclude(activity.city, filters.city)
      );
    },
    [filters],
  );

  const [filteredActivity, setFilteredActivity] = useState<Activity[]>(
    activity.filter(isVisible),
  );

  useEffect(() => {
    setFilteredActivity(activity.filter(isVisible));
  }, [isVisible, activity]);

  return (
    <activityContext.Provider value={{ filteredActivity }}>
      {children}
    </activityContext.Provider>
  );
}

function doesActivityInclude(activity: Activity, query?: string): boolean {
  if (!query) {
    return true;
  }

  return doesSomeInclude(
    [
      activity.title,
      activity.location,
      activity.activityType,
      activity.city,
      activity.date,
    ],
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
