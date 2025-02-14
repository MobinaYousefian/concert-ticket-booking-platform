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

export type Hall = {
  id: number;
  name: string;
  capacity: number;
  city: string;
  /* todo: add data about seat map */
};
