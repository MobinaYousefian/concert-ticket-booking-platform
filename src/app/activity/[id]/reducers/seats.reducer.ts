import { SeatType } from "@/types/seats.type";

export type SeatsAction = {
  id: number;
  seatPrice: number;
  rowNumber: number;
  seatNumber: number;
};

export default function seatsReducer(
  seats: SeatType[],
  action: SeatsAction,
): SeatType[] {
  const isSelected = seats.find(({ id }) => action.id === id);

  if (isSelected) {
    return seats.filter(({ id }) => id !== action.id);
  } else {
    return [
      ...seats,
      {
        id: action.id,
        rowNumber: action.rowNumber,
        seatNumber: action.seatNumber,
        seatPrice: action.seatPrice,
        status: "selected",
      },
    ];
  }
}
