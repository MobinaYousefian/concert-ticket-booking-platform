import { ReactElement } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

import SectionCardComponent from "@/app/activity/[id]/components/section-card/section-card.component";

import HugeiconsCalendar03 from "@/icons/HugeiconsCalendar03";
import HugeiconsLocation04 from "@/icons/HugeiconsLocation04";
import HugeiconsClock01 from "@/icons/HugeiconsClock01";
import HugeiconsFavourite from "@/icons/HugeiconsFavourite";
import HugeiconsShare08 from "@/icons/HugeiconsShare08";

import { activity } from "@/lib/data";
import { Activity } from "@/lib/data.type";

import styles from "./page.module.css";

type Action = {
  id: string;
  icon: ReactElement;
  label: string;
};
const actions: Action[] = [
  {
    id: "favorite",
    icon: <HugeiconsFavourite />,
    label: "علاقه‌مندی‌ها",
  },
  {
    id: "share",
    icon: <HugeiconsShare08 />,
    label: "اشتراک ‌گذاری",
  },
];

type DateTimeInfo = {
  id: number;
  icon: ReactElement;
  label: string;
  data: keyof Activity;
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

const noticeList: string[] = [
  "توجه فرمایید برای کودکان ۴ سال به بالا نیاز به دریافت بلیت می‌باشد.",
  "لطفا در انتخاب صندلی دقت فرمایید، پس از اتمام خرید امکان جابجایی یا کنسلی وجود ندارد.",
];

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const activityData = activity.find((item) => item.id === +params.id);

  if (!activityData) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Image
          src={activityData.banner}
          alt={activityData.title}
          width={600}
          height={900}
        />
      </div>
      <SectionCardComponent>
        <div className={styles.writings}>
          <div className={styles.heading}>
            <h1>{activityData.title}</h1>
            <div className={styles.actions}>
              {actions.map(({ id, icon, label }) => (
                <div key={id} id={styles[id]} className={styles.cta}>
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <ul>
            {dateTimeInfo.map(({ id, icon, label, data }) => (
              <li key={id}>
                <div className={styles.icon}>{icon}</div>
                <p className={styles.label}>{label}</p>
                <p>{activityData[data]}</p>
              </li>
            ))}
          </ul>
          <div className={"perforations"}></div>
        </div>
        <div className={styles.notice}>
          <ul role={"list"}>
            {noticeList.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              تکمیل فرآیند خرید به آن معناست که همه‌
              <strong className={styles.terms}>قوانین و شرایط</strong>
              ‌پذیرفته شده‌است.
            </li>
          </ul>
        </div>
      </SectionCardComponent>
    </div>
  );
}
