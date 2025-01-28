"use client";
import { ComponentProps, ReactElement, useContext } from "react";
import { clsx } from "clsx";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import { FiltersType } from "@/types/filters.type";

type Props = ComponentProps<"li"> & {
  option: string;
  filterKey: keyof FiltersType;
  activeClassName: string;
};

export default function FilterContentComponent({
  option,
  filterKey,
  className,
  activeClassName,
  ...otherProps
}: Props): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const handleChangeFilter = (key: keyof FiltersType, value: string): void => {
    dispatchFilters({ type: "updated_filter", key, value });
    /* todo: add the filter to query param */
  };

  return (
    <li
      className={clsx(
        className,
        filters[filterKey] === option && activeClassName,
      )}
      onClick={() => handleChangeFilter(filterKey, option)}
      {...otherProps}
    >
      {option}
    </li>
  );
}
