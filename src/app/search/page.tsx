import { ReactElement } from "react";

import ResultComponent from "@/app/search/components/result/result.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import EventTypeFilterComponent from "@/app/search/components/event-type-filter/event-type-filter.component";
import FilterSummaryComponent from "@/app/search/components/filter-summary/filter-summary.component";
import CityFilterComponent from "@/app/search/components/city-filter/city-filter.component";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";
import EventsProvider from "@/app/search/providers/events/events.provider";

import HugeiconsFilter from "@/icons/HugeiconsFilter";

import { eventsData } from "@/lib/data";

import { FiltersType } from "@/types/filters.type";

import styles from "./search.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function SearchPage({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <EventsProvider eventsData={eventsData}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles["mobile-filters"]}>
            <button>
              فیلترها
              <HugeiconsFilter />
            </button>
          </div>
          <div className={styles.filters}>
            <FilterSummaryComponent />
            <EventTypeFilterComponent />
            <CityFilterComponent />
          </div>
          <div className={styles.result}>
            <ResultComponent />
          </div>
        </div>
      </EventsProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { query, eventType, city } = searchParams;

  return {
    query: normalizeFilter(query),
    eventType: normalizeFilter(eventType),
    city: normalizeFilter(city),
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
