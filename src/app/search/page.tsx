import { ReactElement } from "react";

import ResultComponent from "@/app/search/components/result/result.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import ActivityTypeFilterComponent from "@/app/search/components/activity-type-filter/activity-type-filter.component";
import FilterSummaryComponent from "@/app/search/components/filter-summary/filter-summary.component";
import CityFilterComponent from "@/app/search/components/city-filter/city-filter.component";
import StatsComponent from "@/app/search/components/stats/stats.component";
// import FiltersCapsuleComponent from "@/app/search/components/mobile-filters/filters-capsule.component";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";
import ActivityProvider from "@/app/search/providers/activity/activity.provider";

import { FiltersType } from "@/types/filters.type";

import { activity } from "@/lib/activity-data";

import { normalizeSearchParam } from "@/utils/functions";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: SearchParams;
};

export default function SearchPage({ searchParams }: Props): ReactElement {
  const defaultFilters = generateDefaultFilters(searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <ActivityProvider activity={activity}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          {/*<div className={styles["mobile-filters"]}>*/}
          {/*  <FiltersCapsuleComponent />*/}
          {/*</div>*/}
          <aside className={styles.filters}>
            <FilterSummaryComponent />
            <ActivityTypeFilterComponent />
            <CityFilterComponent />
          </aside>
          <div className={styles.toolbar}>
            <div className={styles.stats}>
              <StatsComponent />
            </div>
          </div>
          <ResultComponent />
        </div>
      </ActivityProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { query, activityType, city } = searchParams;

  return {
    query: normalizeSearchParam(query),
    activityType: normalizeSearchParam(activityType),
    city: normalizeSearchParam(city),
  };
}
