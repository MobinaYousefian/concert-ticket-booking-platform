"use client";
import { PropsWithChildren, ReactElement, useLayoutEffect } from "react";

import styles from "./dark-mode.module.css";

type Props = PropsWithChildren & {
  theme: string;
};

export default function DarkModeComponent({
  theme,
  children,
}: Props): ReactElement {
  const setTheme = () => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useLayoutEffect(() => {
    const bodyElement = document.querySelector("body");

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches && bodyElement !== null) {
      bodyElement.setAttribute("data-theme", "dark");
    }

    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme && bodyElement !== null) {
      bodyElement.setAttribute("data-theme", selectedTheme);
    }
  }, []);

  return (
    <div className={styles["dark-mode"]}>
      <button onClick={setTheme}>{children}</button>
    </div>
  );
}
