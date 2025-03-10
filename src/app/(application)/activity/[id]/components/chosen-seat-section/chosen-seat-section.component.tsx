import { ReactElement, useContext } from "react";

import SectionCardComponent from "@/app/(application)/activity/[id]/components/section-card/section-card.component";
import ChosenSeatComponent from "@/app/(application)/activity/[id]/components/chosen-seat-section/chosen-seat/chosen-seat.component";

import { SeatsContext } from "@/app/(application)/activity/[id]/providers/seats/seats.provider";

import styles from "./chosen-seat-section.module.css";

export default function ChosenSeatSectionComponent(): ReactElement | null {
  const { seats, dispatchSeats } = useContext(SeatsContext);

  if (!seats.length) return null;
  return (
    <SectionCardComponent className={styles["chosen-seat-section"]}>
      <div className={styles.title}>صندلی‌های انتخاب شده</div>
      <div className={styles.container}>
        {seats.map((seat) => (
          <ChosenSeatComponent
            key={seat.id}
            seat={seat}
            dispatchSeats={dispatchSeats}
          />
        ))}
      </div>
    </SectionCardComponent>
  );
}
