import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useReducer,
} from "react";

import { SeatType } from "@/types/seats.type";

import seatsReducer, {
  SeatsAction,
} from "@/app/activity/[id]/reducers/seats.reducer";

type ContextValue = {
  seats: SeatType[];
  dispatchSeats: Dispatch<SeatsAction>;
};

export const SeatsContext = createContext<ContextValue>({
  seats: [],
  dispatchSeats: () => {},
});

type Props = PropsWithChildren & {
  defaultSeats: SeatType[];
};

export default function SeatsProviderComponent({
  defaultSeats,
  children,
}: Props): ReactElement {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [seats, dispatchSeats] = useReducer(seatsReducer, defaultSeats);

  return (
    <SeatsContext.Provider value={{ seats, dispatchSeats }}>
      {children}
    </SeatsContext.Provider>
  );
}
