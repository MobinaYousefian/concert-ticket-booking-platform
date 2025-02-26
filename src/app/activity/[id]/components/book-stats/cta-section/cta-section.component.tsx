import { ReactElement } from "react";
import Link from "next/link";

import ButtonComponent from "@/components/button/button.component";

import styles from "./cta-section.module.css";

type Props = {
  finalPrice: number;
  seatsLength: number;
};

export default function CtaSectionComponent({
  finalPrice,
  seatsLength,
}: Props): ReactElement {
  return (
    <div className={styles["cta-section"]}>
      <div className={styles.price}>
        قیمت نهایی: {finalPrice.toLocaleString()} تومان
        <span>(با احتساب 10٪ مالیات)</span>
      </div>
      <div className={styles.cta}>
        <ButtonComponent className={styles.button} disabled={seatsLength < 1}>
          <Link href="#">ادامه خرید</Link>
        </ButtonComponent>
      </div>
    </div>
  );
}
