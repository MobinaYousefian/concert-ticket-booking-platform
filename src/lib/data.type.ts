export interface Activity {
  id: number;
  banner: string;
  title: string;
  date: string;
  time: string;
  location: string;
  hallId: number;
  city: string;
  activityType: string;
  noticeList: string[];
  showings: ActivityShowing[];
  remainingShowings: number;
}

export type ActivityShowing = {
  id: number;
  remainingTickets: number;
  date: string;
  time: string;
};

export type ActivityForShowings = Omit<
  Activity,
  "banner" | "activityType" | "noticeList" | "showings" | "remainingShowings"
>;

export type Showing = {
  id: number;
  activityData: ActivityForShowings;
  remainingTickets: number;
  date: string;
  time: string;
  // todo: priceList : ;
};

/* Hall types */
export type Hall = {
  id: number;
  name: string;
  capacity: number;
  city: string;
  seatSections: Section[];
};

export type Section = {
  id: number;
  seatByRow: SeatByRow;
};

export type SeatByRow = {
  [key: string]: Seat[] | null;
};

export type Seat = null | {
  id: number;
  rowNumber: number;
  seatNumber: number;
  seatPrice: number;
  status: "free" | "booked" | "pending" | "nonSale" | "selected";
};
