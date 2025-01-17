import { ComponentProps, ReactElement } from "react";

import { clsx } from "clsx";

import styles from "./filter-button.module.css";

type Props = ComponentProps<"button"> & {
  isActive?: boolean;
  isListFilter: Exclude<boolean, undefined>;
};

export default function FilterButtonComponent({
  className,
  children,
  isActive = false,
  isListFilter,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        isListFilter ? styles.list : styles["filter-button"],
        isActive && styles.active,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
