"use client";
import { ComponentProps, ReactElement, useContext } from "react";
import { clsx } from "clsx";

import ButtonComponent, {
  ButtonShape,
  ButtonVariant,
} from "@/components/button/button.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import { FiltersType } from "@/types/filters.type";

type Props = ComponentProps<"button"> & {
  option: string;
  filterKey: keyof FiltersType;
  activeClassName: string;
  buttonShape?: ButtonShape;
  buttonVariant?: ButtonVariant;
};

export default function FilterContentComponent({
  option,
  filterKey,
  className,
  activeClassName,
  buttonShape = "solid",
  buttonVariant = "primary",
  ...otherProps
}: Props): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const handleChangeFilter = (key: keyof FiltersType, value: string): void => {
    dispatchFilters({ type: "updated_filter", key, value });
    /* todo: add the filter to query param */
  };

  return (
    <ButtonComponent
      shape={buttonShape}
      variant={buttonVariant}
      className={clsx(
        className,
        filters[filterKey] === option && activeClassName,
      )}
      onClick={() => handleChangeFilter(filterKey, option)}
      {...otherProps}
    >
      {option}
    </ButtonComponent>
  );
}
