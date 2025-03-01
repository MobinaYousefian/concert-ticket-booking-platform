import { HallsObj } from "@/lib/hall-data/hall.type";

export interface Activity {
  id: number;
  banner: string;
  title: string;
  date: string;
  time: string;
  location: string;
  hallId: keyof HallsObj;
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
};
