import { RowOffsetObject } from "@/app/activity/[id]/types/canvas.type";

export type HallsObj = {
  "111": Hall;
  "112": Hall;
  "113": Hall;
  "114": Hall;
  "115": Hall;
  "116": Hall;
  "117": Hall;
  "118": Hall;
  "119": Hall;
  "120": Hall;
  "121": Hall;
};

export type Hall = {
  id: keyof HallsObj;
  name: string;
  capacity: number;
  city: string;
  getCanvasMidPoint: GetCanvasMidPoint;
  getRowsOffsetX: GetRowsOffset;
  getRowsOffsetY: GetRowsOffset;
  seatsByRow: Row[];
};

export type GetCanvasMidPoint = (canvasWidth: number) => number;

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
