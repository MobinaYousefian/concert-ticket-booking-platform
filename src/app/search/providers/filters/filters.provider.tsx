"use client";
import {
  PropsWithChildren,
  ReactElement,
  createContext,
  Dispatch,
  useReducer,
} from "react";

import { FiltersType } from "@/types/filters.type";

import filtersReducer, {
  FiltersAction,
} from "@/app/search/reducers/filters.reducer";

type ContextValue = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
