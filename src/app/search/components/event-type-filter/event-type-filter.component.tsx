import { ReactElement } from "react";

import FilterCardComponent from "@/components/filter-card/filter-card.component";

import styles from "./event-type-filter.module.css";

const options: string[] = ["کنسرت‌ها", "تئاترها"];

export default function EventTypeFilterComponent(): ReactElement {
  return (
    <FilterCardComponent>
      <div className={styles["event-type-filter"]}>
        <div className={styles.title}>نوع رویداد</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <button key={option}>{option}</button>
          ))}
        </div>
      </div>
    </FilterCardComponent>
  );
}
