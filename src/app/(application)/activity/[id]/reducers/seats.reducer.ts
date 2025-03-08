import { SeatType } from "@/types/seats.type";

export type SeatsAction =
  | {
      type: "toggle_seat";
      id: number;
      seatPrice: number;
      rowNumber: number;
      seatNumber: number;
    }
  | {
      type: "remove_seat";
      id: number;
    };

export default function seatsReducer(
  seats: SeatType[],
  action: SeatsAction,
): SeatType[] {
  switch (action.type) {
    case "toggle_seat": {
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
    case "remove_seat": {
      return seats.filter(({ id }) => id !== action.id);
    }
  }
}
