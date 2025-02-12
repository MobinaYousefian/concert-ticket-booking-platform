import { Dispatch, SetStateAction } from "react";

export function openModal<StateValueType>(
  setStateAction: Dispatch<SetStateAction<StateValueType>>,
  newStateValue: StateValueType,
) {
  setStateAction(newStateValue);
  document.body.style.overflow = "hidden";
}

export function closeModal<StateValueType>(
  setStateAction: Dispatch<SetStateAction<StateValueType>>,
  newStateValue: StateValueType,
) {
  setStateAction(newStateValue);
  document.body.style.overflow = "auto";
}

export function normalizeSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
