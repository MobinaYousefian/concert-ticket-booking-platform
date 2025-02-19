"use client";
import { ReactElement, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import ButtonComponent from "@/components/button/button.component";
import SelectComponent from "@/components/select/select.component";

import { ShowingSelectData } from "@/app/activity/[id]/components/book-stats/book-stats.component";

import { showingsData } from "@/lib/showings-data";

import { SelectOptionType } from "@/types/select-option.type";

import styles from "./cta-section.module.css";

type Props = {
  finalPrice: number;
  showingSelectData: ShowingSelectData;
};

export default function CtaSectionComponent({
  finalPrice,
  showingSelectData,
}: Props): ReactElement {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>({
    value: "",
    label: "تغییر سانس",
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const relatedShowings = showingsData.filter(
    ({ activityData }) => activityData.id === showingSelectData.activityId,
  );

  const selectOptions = relatedShowings.map(({ id, date, time }) => {
    return {
      value: id.toString(),
      label: `${date} - ${time}`,
    };
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const setShowingIdQuery = (option: SelectOptionType) => {
    setSelectedOption(option);
    router.push(pathname + "?" + createQueryString("showingId", option.value));
  };

  return (
    <div className={styles["cta-section"]}>
      <div className={styles.price}>
        قیمت نهایی: {finalPrice.toLocaleString()} تومان
        <span>(با احتساب 10٪ مالیات)</span>
      </div>
      <div className={styles.cta}>
        <ButtonComponent size={"lg"}>
          <Link href={"#"}>ادامه خرید</Link>
        </ButtonComponent>
        <div className={styles.select}>
          <SelectComponent
            options={selectOptions}
            selectedOption={selectedOption}
            onSelectedOptionChange={setShowingIdQuery}
          />
        </div>
      </div>
    </div>
  );
}
