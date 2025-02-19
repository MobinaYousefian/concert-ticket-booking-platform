import { SeatType } from "@/types/seats.type";

export type SeatsAction = {
  id: number;
  seatPrice: number;
  rowNumber: number;
  seatNumber: number;
};

export default function seatsReducer(seats: SeatType[], action: SeatsAction) {
  const isSelected = seats.find(({ id }) => action.id === id);

  if (isSelected) {
    return seats.filter(({ id }) => id !== action.id);
  } else {
    return [
      {
        id: action.id,
        seatPrice: action.seatPrice,
        seatNumber: action.seatNumber,
        rowNumber: action.rowNumber,
        status: "selected",
      },
      ...seats,
    ];
  }
}
