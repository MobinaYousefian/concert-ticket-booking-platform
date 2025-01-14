import { ReactElement } from "react";

import EventCardComponent from "@/components/event-card/event-card.component";
import FilterComponent from "@/app/search/components/filter/filter.component";

import { eventsData } from "@/lib/data";

import styles from "./search.module.css";

export default function SearchPage(): ReactElement {
  return (
    <div className={styles.search}>
      <div className={styles.filters}>
        <FilterComponent
          options={[
            { value: "concert", label: "کنسرت‌ها" },
            { value: "show", label: "نمایش‌ها" },
          ]}
        />
        <div className={styles.cities}>
          <ul>
            <li>تهران</li>
            <li>اصفهان</li>
            <li>رشت</li>
            <li>شیراز</li>
            <li>یزد</li>
            <li>کرج</li>
          </ul>
        </div>
      </div>
      <ul className={styles.result}>
        {eventsData.map((event) => (
          <EventCardComponent key={event.id} eventsData={event} />
        ))}
      </ul>
    </div>
  );
}
