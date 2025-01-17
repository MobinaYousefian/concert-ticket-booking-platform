"use client";
import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useState,
} from "react";

import { FiltersType } from "@/types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: Exclude<FiltersType[TKey], undefined>,
  ) => void;
  removeFilter: <TKey extends keyof FiltersType>(key: TKey) => void;
  clearAllFilters: () => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  removeFilter: () => {},
  clearAllFilters: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilter = <TKey extends keyof FiltersType>(
    key: TKey,
    value: Exclude<FiltersType[TKey], undefined>,
  ): void => {
    setFilters((old) => ({ ...old, [key]: value }));
  };

  const removeFilter = <TKey extends keyof FiltersType>(key: TKey): void => {
    setFilters((old) => {
      const clone = { ...old };
      delete clone[key];
      return clone;
    });
  };

  const clearAllFilters = (): void => {
    setFilters({});
  };

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilter, removeFilter, clearAllFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
