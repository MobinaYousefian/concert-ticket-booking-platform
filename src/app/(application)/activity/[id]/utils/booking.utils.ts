import { SeatType } from "@/types/seats.type";
import { SEAT_TAX_PERCENTAGE } from "@/app/(application)/activity/[id]/constants/booking.constants";

export const calcTotalPrice = <dataType extends SeatType>(
  dataArray: dataType[],
) => {
  return dataArray.reduce((prev, curr) => {
    return prev + curr.seatPrice;
  }, 0);
};

export const calcTotalTax = <DataType extends SeatType>(
  dataArray: DataType[],
) => {
  return dataArray.reduce((prev, curr) => {
    return prev + curr.seatPrice * SEAT_TAX_PERCENTAGE;
  }, 0);
};
