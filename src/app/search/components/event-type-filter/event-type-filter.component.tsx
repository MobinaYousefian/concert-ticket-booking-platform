"use client";
import { ReactElement, useContext } from "react";

import { clsx } from "clsx";

import FilterCardComponent from "@/components/filter-card/filter-card.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./event-type-filter.module.css";

const options: string[] = ["کنسرت‌ها", "تئاترها"];

export default function EventTypeFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const handleChangeFilter = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "eventType", value });
    /* add the filter to query param */
  };

  return (
    <FilterCardComponent>
      <div className={styles["event-type-filter"]}>
        <div className={styles.title}>نوع رویداد</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <button
              key={option}
              className={clsx(
                Object.values(filters).includes(option) && styles.active,
              )}
              onClick={() => handleChangeFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </FilterCardComponent>
  );
}
