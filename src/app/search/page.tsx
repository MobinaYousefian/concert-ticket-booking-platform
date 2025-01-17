import { ReactElement } from "react";

import EventCardComponent from "@/components/event-card/event-card.component";
import FilterComponent from "@/app/search/components/filter/filter.component";

import FiltersProvider from "@/app/search/providers/filters.provider";

import { eventsData } from "@/lib/data";

import styles from "./search.module.css";

export default function SearchPage(): ReactElement {
  return (
    <FiltersProvider>
      <div className={styles.search}>
        <div className={styles.filters}>
          <FilterComponent
            options={[
              { key: "concert", label: "کنسرت‌ها" },
              { key: "show", label: "نمایش‌ها" },
            ]}
          />
          <FilterComponent
            title={"شهر برگزار کننده"}
            options={[
              { key: "tehran", label: "تهران" },
              { key: "esfahan", label: "اصفهان" },
              { key: "rasht", label: "رشت" },
              { key: "shiraz", label: "شیراز" },
              { key: "yazd", label: "یزد" },
              { key: "karaj", label: "کرج" },
              { key: "gorgan", label: "گرگان" },
              { key: "tabriz", label: "تبریز" },
              { key: "ghazvin", label: "قزوین" },
            ]}
            isListFilter={true}
          />
        </div>
        <ul className={styles.result}>
          {eventsData.map((event) => (
            <EventCardComponent key={event.id} eventsData={event} />
          ))}
        </ul>
      </div>
    </FiltersProvider>
  );
}
