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
  sessions: ActivitySession[];
  remainingSessions: number;
}

export type ActivitySession = {
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
