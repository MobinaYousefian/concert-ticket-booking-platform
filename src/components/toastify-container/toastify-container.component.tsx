"use client";
import React, { ReactElement } from "react";

import { Theme, ToastContainer, TypeOptions } from "react-toastify";

import HugeiconsInformationCircle from "@/icons/circles/HugeiconsInformationCircle";
import HugeiconsCheckmarkCircle01 from "@/icons/circles/HugeiconsCheckmarkCircle01";
import HugeiconsAlert02 from "@/icons/HugeiconsAlert02";
import HugeiconsAlertCircle from "@/icons/circles/HugeiconsAlertCircle";

import "./toastify-container.css";

const iconColors = {
  info: "var(--toastify-icon-color-info)",
  success: "var(--toastify-color-success)",
  warning: "var(--toastify-color-warning)",
  error: "var(--toastify-color-error)",
  default: "",
};

const replaceToastifyIcons = (type: TypeOptions, theme: Theme) => {
  const iconFill: { [key: string]: string } = {
    light: "var(--toastify-color-light)",
    dark: "var(--toastify-color-dark)",
    colored: "",
  };

  const color = iconFill[theme];
  let fill = "none";

  if (theme === "light" || "dark") {
    fill = iconColors[type];
  }

  switch (type) {
    case "info":
      return (
        <HugeiconsInformationCircle
          color={color}
          fill={fill}
          width="1.5em"
          height="1.5em"
        />
      );
    case "success":
      return (
        <HugeiconsCheckmarkCircle01
          color={color}
          fill={fill}
          width="1.5em"
          height="1.5em"
        />
      );
    case "warning":
      return (
        <HugeiconsAlert02
          color={color}
          fill={fill}
          width="1.5em"
          height="1.5em"
        />
      );
    case "error":
      return (
        <HugeiconsAlertCircle
          color={color}
          fill={fill}
          width="1.5em"
          height="1.5em"
        />
      );
    default:
      return null;
  }
};

export default function ToastifyContainerComponent(): ReactElement {
  return (
    <ToastContainer
      limit={2}
      autoClose={3000}
      newestOnTop
      draggable
      theme="colored"
      icon={({ type, theme }) => replaceToastifyIcons(type, theme)}
      closeButton={false}
    />
  );
}
