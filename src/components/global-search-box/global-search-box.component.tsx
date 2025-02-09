"use client";
import {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsSearch01 from "@/icons/HugeiconsSearch01";
import HugeiconsLocation04 from "@/icons/HugeiconsLocation04";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  const router = useRouter();
  const pathname = usePathname();

  const { filters, dispatchFilters } = useContext(FiltersContext);

  const [query, setQuery] = useState<string>("");

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (pathname === "/search") {
      if (query) {
        dispatchFilters({
          type: "updated_filter",
          key: "query",
          value: query,
        });
      } else {
        dispatchFilters({
          type: "removed_filter",
          key: "query",
        });
      }
    } else {
      const href = query ? `/search/?query=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    if (pathname !== "/search") {
      return;
    }

    const filterQuery = filters.query || "";
    setQuery(filterQuery);

    const href = filterQuery ? `/search/?query=${filterQuery}` : "/search";
    router.replace(href);
  }, [filters, pathname, router]);

  return (
    <form className={styles["global-search-box"]} onSubmit={handleSubmitForm}>
      <div className={styles.search}>
        <HugeiconsSearch01 />
      </div>
      <input
        name={"query"}
        type={"text"}
        placeholder={"نام خواننده، نمایش صحنه‌ای، گروه اجرا کننده، شهر و ..."}
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.cities}>
        <ButtonComponent variant={"muted"}>
          <HugeiconsLocation04 />
          همه شهرها
        </ButtonComponent>
      </div>
    </form>
  );
}
