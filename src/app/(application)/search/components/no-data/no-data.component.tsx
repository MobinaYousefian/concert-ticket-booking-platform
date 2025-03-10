import { ReactElement } from "react";
import Image from "next/image";

import noDataImage from "@/assets/illustrations/no-data.svg";

import styles from "./no-data.module.css";

export default function NoDataComponent(): ReactElement {
  return (
    <section className={styles["no-data"]}>
      <div className={styles.visuals}>
        <Image src={noDataImage} alt={""} />
      </div>
      <p>متاسفیم! رویدادی با این مشخصات برگزار نشده است.</p>
    </section>
  );
}
