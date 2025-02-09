"use client";
import { ReactElement, useContext, useMemo } from "react";

import ButtonComponent from "@/components/button/button.component";

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
      <ButtonComponent
        variant={"destructive"}
        size={"sm"}
        type="button"
        onClick={handleRemoveAll}
        className={styles["remove-all"]}
      >
        حذف همه
      </ButtonComponent>
      <ul className={styles.filters}>
        {filters.query && (
          <li onClick={() => handleRemoveFilter("query")}>
            <ButtonComponent variant={"muted"} size={"sm"}>
              {filters.query}
              <HugeiconsCancel01 />
            </ButtonComponent>
          </li>
        )}
        {filters.activityType && (
          <li onClick={() => handleRemoveFilter("activityType")}>
            <ButtonComponent variant={"muted"} size={"sm"}>
              {filters.activityType}
              <HugeiconsCancel01 />
            </ButtonComponent>
          </li>
        )}
        {filters.city && (
          <li onClick={() => handleRemoveFilter("city")}>
            <ButtonComponent variant={"muted"} size={"sm"}>
              {filters.city}
              <HugeiconsCancel01 />
            </ButtonComponent>
          </li>
        )}
      </ul>
    </div>
  );
}
