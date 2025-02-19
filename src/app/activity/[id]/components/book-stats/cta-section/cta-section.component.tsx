import { ReactElement } from "react";
import Link from "next/link";

import ButtonComponent from "@/components/button/button.component";

import styles from "./cta-section.module.css";

type Props = {
  finalPrice: number;
};

export default function CtaSectionComponent({
  finalPrice,
}: Props): ReactElement {
  return (
    <div className={styles["cta-section"]}>
      <div className={styles.price}>
        قیمت نهایی: {finalPrice.toLocaleString()} تومان
        <span>(با احتساب 10٪ مالیات)</span>
      </div>
      <div className={styles.cta}>
        <ButtonComponent size={"lg"} className={styles.button}>
          <Link href={"#"}>ادامه خرید</Link>
        </ButtonComponent>
        <ButtonComponent
          size={"lg"}
          variant={"muted"}
          shape={"outline"}
          className={styles.button}
        >
          تغییر سانس
        </ButtonComponent>
      </div>
    </div>
  );
}
