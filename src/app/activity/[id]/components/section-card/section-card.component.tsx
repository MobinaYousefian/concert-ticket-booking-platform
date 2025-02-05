import { PropsWithChildren, ReactElement } from "react";

import styles from "./section-card.module.css";

type Props = PropsWithChildren;

export default function SectionCardComponent({
  children,
}: Props): ReactElement {
  return <section className={styles["section-card"]}>{children}</section>;
}
