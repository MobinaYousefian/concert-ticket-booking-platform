import { Dispatch, ReactElement } from "react";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsDelete02 from "@/icons/HugeiconsDelete02";

import { SeatType } from "@/types/seats.type";
import { SeatsAction } from "@/app/(application)/activity/[id]/reducers/seats.reducer";

import styles from "./chosen-seat.module.css";

type Props = {
  seat: SeatType;
  dispatchSeats: Dispatch<SeatsAction>;
};

export default function ChosenSeatComponent({
  seat,
  dispatchSeats,
}: Props): ReactElement {
  const removeChosenSeat = () => {
    dispatchSeats({
      type: "remove_seat",
      id: seat.id,
    });
  };

  return (
    <div key={seat.id} className={styles["chosen-seat"]}>
      <div className={styles.position}>
        <div className={styles.row}>
          <div>ردیف:</div>
          <div>{seat.rowNumber}</div>
        </div>
        <div className={styles.chair}>
          <div>صندلی:</div>
          <div>{seat.seatNumber}</div>
        </div>
      </div>
      <div className="block-perforations"></div>
      <div className={styles.price}>
        <div>{seat.seatPrice.toLocaleString()} تومان</div>
      </div>
      <ButtonComponent
        shape="ghost"
        className={styles.delete}
        onClick={removeChosenSeat}
      >
        <HugeiconsDelete02 />
      </ButtonComponent>
    </div>
  );
}
