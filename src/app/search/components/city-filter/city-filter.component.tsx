import { ReactElement } from "react";

import FilterCardComponent from "@/components/filter-card/filter-card.component";
import FilterContentComponent from "@/components/filter-card/filter-content/filter-content.component";

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
  return (
    <FilterCardComponent title={"شهر برگزارکننده"}>
      <ul className={styles["city-filter"]}>
        {options.map((option) => (
          <li key={option}>
            <FilterContentComponent
              option={option}
              filterKey={"city"}
              className={styles.item}
              activeClassName={styles.active}
              buttonVariant={"muted"}
              buttonShape={"ghost"}
            />
          </li>
        ))}
      </ul>
    </FilterCardComponent>
  );
}
