import { ReactElement } from "react";

import EventCardComponent from "@/components/event-card/event-card.component";
import FilterCardComponent from "@/components/filter-card/filter-card.component";
import FilterButtonComponent from "@/app/search/components/filter-button/filter-button.component";

import { eventsData } from "@/lib/data";

import styles from "./search.module.css";

export default function SearchPage(): ReactElement {
  return (
    <div className={styles.search}>
      <div className={styles.filters}>
        <FilterCardComponent>
          <div className={styles.buttons}>
            <FilterButtonComponent>کنسرت‌ها</FilterButtonComponent>
            <FilterButtonComponent>نمایش‌ها</FilterButtonComponent>
          </div>
        </FilterCardComponent>
        <FilterCardComponent>
          <select>
            انتخاب شهر
            <option>همه شهر‌ها</option>
            <option>تهران</option>
            <option>اصفهان</option>
          </select>
        </FilterCardComponent>
      </div>
      <ul className={styles.result}>
        {eventsData.map((event) => (
          <EventCardComponent key={event.id} eventsData={event} />
        ))}
      </ul>
    </div>
  );
}
