import { RowOffsetObject } from "@/app/activity/[id]/types/canvas.type";

export type Hall = {
  id: number;
  name: string;
  capacity: number;
  city: string;
  getRowsOffsetX: GetRowsOffset;
  getRowsOffsetY: GetRowsOffset;
  seatsByRow: Row[];
};

export type GetRowsOffset = (
  seatWidth: number,
  desktopRectMargin: number,
) => RowOffsetObject;

export type Row = Seat[] | null;

export type Seat = null | {
  id: number;
  rowNumber: number;
  seatNumber: number;
  seatPrice: number;
  status: "free" | "booked" | "pending" | "nonSale" | "selected";
};
