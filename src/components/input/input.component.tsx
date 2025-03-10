import { ComponentProps, ForwardedRef, forwardRef, ReactElement } from "react";
import { clsx } from "clsx";

import ButtonComponent from "@/components/button/button.component";

import styles from "./input.module.css";

type Props = ComponentProps<"input"> & {
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onSuffixClick?: ComponentProps<typeof ButtonComponent>["onClick"];
};

function InputComponent(
  { prefixIcon, suffixIcon, onSuffixClick, className, ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <label className={clsx(styles.input, className)}>
      <div className={styles.container}>
        {prefixIcon && <div className={styles.prefix}>{prefixIcon}</div>}
        <input ref={ref} {...otherProps} />
        {suffixIcon && (
          <ButtonComponent
            type="button"
            shape="ghost"
            variant="muted"
            onClick={onSuffixClick}
          >
            <div className={styles.suffix}>{suffixIcon}</div>
          </ButtonComponent>
        )}
      </div>
    </label>
  );
}

export default forwardRef(InputComponent);
