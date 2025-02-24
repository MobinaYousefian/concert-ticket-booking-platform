import { ReactElement, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SelectComponent from "@/components/select/select.component";

import { showingsData } from "@/lib/showings-data";

import { SelectOptionType } from "@/types/select-option.type";
import { CurrentShowingSelectData } from "@/app/activity/[id]/components/book-stats/book-stats.component";

import styles from "./change-showing.module.css";

type Props = {
  currentShowingSelectData: CurrentShowingSelectData;
};

export default function ChangeShowingComponent({
  currentShowingSelectData,
}: Props): ReactElement {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const relatedShowings = showingsData.filter(
    ({ activityData }) =>
      activityData.id === currentShowingSelectData.activityId,
  );

  const selectOptions = relatedShowings.map(({ id, date, time }) => {
    return {
      value: id.toString(),
      label: `${date} - ${time}`,
    };
  });

  const [selectedOption, setSelectedOption] = useState<SelectOptionType>({
    value: currentShowingSelectData.showingId.toString(),
    label: "تغییر سانس",
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
    <div className={styles["change-showing"]}>
      {selectOptions.length > 1 && (
        <SelectComponent
          options={selectOptions}
          selectedOption={selectedOption}
          onSelectedOptionChange={setShowingIdQuery}
        />
      )}
    </div>
  );
}
