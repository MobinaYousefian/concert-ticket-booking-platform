import { PropsWithChildren, ReactElement } from "react";

import styles from "./filter-card.module.css";

type Props = PropsWithChildren;

export default function FilterCardComponent({ children }: Props): ReactElement {
  return <div className={styles["filter-card"]}>{children}</div>;
}
