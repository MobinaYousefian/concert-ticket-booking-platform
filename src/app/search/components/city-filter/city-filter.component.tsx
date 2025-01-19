"use client";
import { ReactElement, useContext } from "react";

import FilterCardComponent from "@/components/filter-card/filter-card.component";

import styles from "./city-filter.module.css";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

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
  const { dispatchFilters } = useContext(FiltersContext);

  const handleChangeFilter = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "city", value });
  };

  return (
    <FilterCardComponent>
      <div className={styles["city-filter"]}>
        <div className={styles.title}>شهر برگزارکننده</div>
        <ul className={styles.city}>
          {options.map((option) => (
            <li key={option} onClick={() => handleChangeFilter(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </FilterCardComponent>
  );
}
