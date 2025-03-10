import { ComponentProps, ReactElement } from "react";
import clsx from "clsx";

import styles from "./loading-spinner.module.css";

type Props = ComponentProps<"div">;

export default function LoadingSpinnerComponent({
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <span
      className={clsx(styles["loading-spinner"], className)}
      {...otherProps}
    ></span>
  );
}
