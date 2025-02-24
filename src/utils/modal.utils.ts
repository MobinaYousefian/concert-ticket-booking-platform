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
