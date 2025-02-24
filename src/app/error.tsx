"use client";
import { ReactElement } from "react";
import Image from "next/image";

import ButtonComponent from "@/components/button/button.component";

import errorImage from "@/assets/illustrations/warning.svg";

import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles.error}>
      <div className={styles.writings}>
        <h1>خطای ناشناخته رخ داده است</h1>
        <p>با عرض پوزش لطفا با پشتیبانی تماس بگیرید</p>
      </div>
      <div className={styles.actions}>
        <ButtonComponent onClick={reset} size="lg">
          تلاش مجدد
        </ButtonComponent>
      </div>
      <div className={styles.log}>
        <details>
          <summary>لاگ خطا</summary>
          <pre dir={"ltr"}>{error.stack}</pre>
        </details>
      </div>
      <div className={styles.visuals}>
        <Image src={errorImage} alt={""} priority />
      </div>
    </div>
  );
}
