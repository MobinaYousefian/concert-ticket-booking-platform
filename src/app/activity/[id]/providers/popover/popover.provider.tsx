import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

import { PopoverType } from "@/types/popover.type";

type ContextValue = {
  popoverData: PopoverType;
  setPopoverData: Dispatch<SetStateAction<PopoverType>>;
};

export const PopoverContext = createContext<ContextValue>({
  popoverData: null,
  setPopoverData: () => {},
});

type Props = PropsWithChildren & {
  defaultPopoverData: PopoverType;
};

export default function PopoverProviderComponent({
  children,
  defaultPopoverData,
}: Props): ReactElement {
  const [popoverData, setPopoverData] =
    useState<PopoverType>(defaultPopoverData);

  return (
    <PopoverContext.Provider value={{ popoverData, setPopoverData }}>
      {children}
    </PopoverContext.Provider>
  );
}
