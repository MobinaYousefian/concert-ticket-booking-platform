import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import ButtonComponent from "@/components/button/button.component";

import quietStreet from "@/assets/illustrations/quiet-street.svg";

import styles from "./not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <h1>۴۰۴</h1>
        <h2>صفحه مورد نظر یافت نشد!</h2>
      </div>
      <div className={styles.cta}>
        <Link href={"/"}>
          <ButtonComponent>بازگشت به خانه</ButtonComponent>
        </Link>
      </div>
      <div className={styles.visuals}>
        <Image src={quietStreet} alt={""} width={272} height={272} priority />
      </div>
    </div>
  );
}
