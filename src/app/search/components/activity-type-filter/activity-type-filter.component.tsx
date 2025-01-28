import { ReactElement } from "react";

import FilterCardComponent from "@/components/filter-card/filter-card.component";
import FilterContentComponent from "@/components/filter-card/filter-content/filter-content.component";

import styles from "./activity-type-filter.module.css";

const options: string[] = ["کنسرت‌ها", "تئاترها"];

export default function ActivityTypeFilterComponent(): ReactElement {
  return (
    <FilterCardComponent title={"نوع رویداد"}>
      <ul className={styles["activity-type-filter"]}>
        {options.map((option) => (
          <FilterContentComponent
            key={option}
            option={option}
            filterKey={"activityType"}
            className={styles.item}
            activeClassName={styles.active}
          />
        ))}
      </ul>
    </FilterCardComponent>
  );
}
