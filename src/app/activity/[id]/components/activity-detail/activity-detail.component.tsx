import { ReactElement } from "react";

import SectionCardComponent from "@/app/activity/[id]/components/section-card/section-card.component";
import ActivityInfoComponent from "@/app/activity/[id]/components/activity-info/activity-info.component";
import PriceButtonComponent from "@/app/activity/[id]/components/price-button/price-button.component";

import { Activity } from "@/lib/data.type";

import styles from "./activity-detail.module.css";

type Props = {
  activityData: Activity;
};

export default function ActivityDetailComponent({
  activityData,
}: Props): ReactElement {
  return (
    <SectionCardComponent>
      <div className={styles["activity-detail"]}>
        <ActivityInfoComponent activityData={activityData} />
        <div className={"perforations"}></div>
        <div className={styles["activity-notice"]}>
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
            remainingShowings={activityData.remainingShowings}
          />
        </div>
      </div>
    </SectionCardComponent>
  );
}
