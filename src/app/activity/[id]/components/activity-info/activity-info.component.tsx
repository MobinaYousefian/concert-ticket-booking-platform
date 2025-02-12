import { ReactElement } from "react";

import SectionCardComponent from "@/app/activity/[id]/components/section-card/section-card.component";
import PriceButtonComponent from "@/app/activity/[id]/components/price-button/price-button.component";
import AddFavoriteComponent from "@/components/add-favorite/add-favorite.component";
import ShareComponent from "@/components/share/share.component";

import { Activity } from "@/lib/data.type";

import HugeiconsCalendar03 from "@/icons/HugeiconsCalendar03";
import HugeiconsClock01 from "@/icons/HugeiconsClock01";
import HugeiconsLocation04 from "@/icons/HugeiconsLocation04";

import styles from "./activity-info.module.css";

type DateTimeInfo = {
  id: number;
  icon: ReactElement;
  label: string;
  data: "date" | "time" | "location";
};
const dateTimeInfo: DateTimeInfo[] = [
  {
    id: 1,
    icon: <HugeiconsCalendar03 />,
    label: "تاریخ اجرا: ",
    data: "date",
  },
  {
    id: 2,
    icon: <HugeiconsClock01 />,
    label: "ساعت: ",
    data: "time",
  },
  {
    id: 3,
    icon: <HugeiconsLocation04 />,
    label: "محل برگزاری: ",
    data: "location",
  },
];

type Props = {
  activityData: Activity;
};

export default function ActivityInfoComponent({
  activityData,
}: Props): ReactElement {
  return (
    <SectionCardComponent>
      <div className={styles["activity-info"]}>
        <div className={styles.heading}>
          <h1>{activityData.title}</h1>
          <div className={styles.actions}>
            <AddFavoriteComponent />
            <ShareComponent />
          </div>
        </div>
        <ul>
          {dateTimeInfo.map(({ id, icon, label, data }) => (
            <li key={id}>
              <div className={styles.icon}>{icon}</div>
              <p className={styles.label}>{label}</p>
              <p>
                {data === "location" && `${activityData.city}،` + " "}
                {activityData[data]}
              </p>
            </li>
          ))}
        </ul>
        <div className={"perforations"}></div>
      </div>
      <div className={styles.notice}>
        <ul role={"list"}>
          {activityData.noticeList.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            تکمیل فرآیند خرید به معنای پذیرفتن‌
            <strong className={styles.terms}>قوانین و شرایط</strong>
            ‌این وب‌سایت می‌باشد.
          </li>
        </ul>
        <PriceButtonComponent
          remainingSessions={activityData.remainingSessions}
        />
      </div>
    </SectionCardComponent>
  );
}
