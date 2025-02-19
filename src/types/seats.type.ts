export type SeatType = {
  id: number;
  rowNumber: number;
  seatNumber: number;
  seatPrice: number;
  status: "free" | "booked" | "pending" | "nonSale" | "selected";
};
