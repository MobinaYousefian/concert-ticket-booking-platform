"use client";
import { ReactElement, useContext } from "react";

import { clsx } from "clsx";

import FilterCardComponent from "@/components/filter-card/filter-card.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./city-filter.module.css";

const options: string[] = [
  "تهران",
  "کرج",
  "اصفهان",
  "شیراز",
  "رشت",
  "قزوین",
  "گرگان",
  "تبریز",
];

export default function CityFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const handleChangeFilter = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "city", value });
    /* add the filter to query param */
  };

  return (
    <FilterCardComponent>
      <div className={styles["city-filter"]}>
        <div className={styles.title}>شهر برگزارکننده</div>
        <ul className={styles.city}>
          {options.map((option) => (
            <li
              className={clsx(
                Object.values(filters).includes(option) && styles.active,
              )}
              key={option}
              onClick={() => handleChangeFilter(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </FilterCardComponent>
  );
}
