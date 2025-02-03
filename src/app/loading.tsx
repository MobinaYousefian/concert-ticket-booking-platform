import { ReactElement } from "react";

import styles from "./loading.module.css";

export default function Loading(): ReactElement {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
    </div>
  );
}
