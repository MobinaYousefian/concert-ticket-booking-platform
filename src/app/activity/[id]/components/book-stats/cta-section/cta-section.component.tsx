import { ReactElement, useContext } from "react";
import Link from "next/link";

import ButtonComponent from "@/components/button/button.component";

import { SeatsContext } from "@/app/activity/[id]/providers/seats/seats.provider";

import {
  calcTotalPrice,
  calcTotalTax,
} from "@/app/activity/[id]/utils/booking.utils";

import styles from "./cta-section.module.css";

export default function CtaSectionComponent(): ReactElement {
  const { seats } = useContext(SeatsContext);

  const totalPriceWithTax = calcTotalPrice(seats) + calcTotalTax(seats);

  return (
    <div className={styles["cta-section"]}>
      <div className={styles.price}>
        قیمت نهایی: {totalPriceWithTax.toLocaleString()} تومان
        <span>(با احتساب 10٪ مالیات)</span>
      </div>
      <div className={styles.cta}>
        <ButtonComponent className={styles.button} disabled={seats.length < 1}>
          <Link href="#" className={styles.link}>
            ادامه خرید
          </Link>
        </ButtonComponent>
      </div>
    </div>
  );
}
