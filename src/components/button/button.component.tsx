import { ComponentProps, ReactElement } from "react";

import { clsx } from "clsx";

import styles from "./button.module.css";

export type ButtonShape = "solid" | "outline" | "link" | "ghost" | "icon";
export type ButtonVariant = "primary" | "muted" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

type Props = ComponentProps<"button"> & {
  shape?: ButtonShape;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function ButtonComponent({
  shape = "solid",
  variant = "primary",
  size = "md",
  className,
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[shape],
        styles[variant],
        styles[size],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
