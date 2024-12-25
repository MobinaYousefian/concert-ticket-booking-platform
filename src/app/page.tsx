import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import TamashachiSolidLogo from "@/logo/t-solid-logo";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <TamashachiSolidLogo />
        تماشاچی
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>کنسرت تهران</li>
          <li>نمایش پرویز و پریزاد</li>
          <li>محسن یگانه</li>
        </ul>
      </div>
    </div>
  );
}
