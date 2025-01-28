"use client";
import { ReactElement, useContext, useMemo } from "react";

import HugeiconsCancel01 from "@/icons/HugeiconsCancel01";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import { FiltersType } from "@/types/filters.type";

import styles from "./filter-summary.module.css";

export default function FilterSummaryComponent(): ReactElement | null {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isEmpty = useMemo(() => {
    return !filters.query && !filters.city && !filters.activityType;
  }, [filters]);

  const handleRemoveAll = (): void => {
    dispatchFilters({ type: "removed_all" });
  };

  const handleRemoveFilter = (key: keyof FiltersType): void => {
    dispatchFilters({ type: "removed_filter", key });
  };

  if (isEmpty) return null;

  return (
    <div className={styles["filter-summary"]}>
      <div className={styles.title}>فیلترها</div>
      <button type="button" onClick={handleRemoveAll}>
        حذف همه
      </button>
      <ul className={styles.filters}>
        {filters.query && (
          <li onClick={() => handleRemoveFilter("query")}>
            {filters.query}
            <HugeiconsCancel01 />
          </li>
        )}
        {filters.activityType && (
          <li onClick={() => handleRemoveFilter("activityType")}>
            {filters.activityType}
            <HugeiconsCancel01 />
          </li>
        )}
        {filters.city && (
          <li onClick={() => handleRemoveFilter("city")}>
            {filters.city}
            <HugeiconsCancel01 />
          </li>
        )}
      </ul>
    </div>
  );
}
