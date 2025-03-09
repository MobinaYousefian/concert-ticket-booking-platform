"use client";
import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useState,
} from "react";

import InputComponent from "@/components/input/input.component";

import HugeiconsSquareLockPassword from "@/icons/HugeiconsSquareLockPassword";
import HugeiconsViewOff from "@/icons/HugeiconsViewOff";
import HugeiconsView from "@/icons/HugeiconsView";

type Props = ComponentProps<typeof InputComponent>;

function PasswordInputComponent(
  { ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <InputComponent
      ref={ref}
      type={isVisible ? "text" : "password"}
      prefixIcon={<HugeiconsSquareLockPassword />}
      suffixIcon={isVisible ? <HugeiconsView /> : <HugeiconsViewOff />}
      onSuffixClick={() => setIsVisible((prev) => !prev)}
      {...otherProps}
    />
  );
}

export default forwardRef(PasswordInputComponent);
