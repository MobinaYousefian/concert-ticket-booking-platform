import { ReactElement } from "react";

import FilterButtonComponent from "@/app/search/components/filter-button/filter-button.component";
import FilterCardComponent from "@/components/filter-card/filter-card.component";

import styles from "./filter.module.css";

type Option = {
  value: string;
  label: string;
};

type Props = {
  title?: string;
  options: Option[];
};

export default function FilterComponent({
  title,
  options,
}: Props): ReactElement {
  return (
    <FilterCardComponent>
      <div className={styles.filter}>
        <div className={styles.title}>{title}</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FilterButtonComponent key={option.value}>
              {option.label}
            </FilterButtonComponent>
          ))}
        </div>
      </div>
    </FilterCardComponent>
  );
}
