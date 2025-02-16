import { ComponentProps, ReactElement } from "react";

import { clsx } from "clsx";

import styles from "./section-card.module.css";

type Props = ComponentProps<"section">;

export default function SectionCardComponent({
  children,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <section
      className={clsx(styles["section-card"], className)}
      {...otherProps}
    >
      {children}
    </section>
  );
}
