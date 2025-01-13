"use client";
import {
  PropsWithChildren,
  ReactElement,
  useLayoutEffect,
  useState,
} from "react";

import { clsx } from "clsx";

import styles from "./dark-mode.module.css";

type Props = PropsWithChildren & {
  theme: string;
};

export default function DarkModeComponent({
  theme,
  children,
}: Props): ReactElement {
  const [themeState, setThemeState] = useState<string | null>(null);

  const setTheme = () => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  useLayoutEffect(() => {
    const bodyElement = document.querySelector("body");

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches && bodyElement !== null) {
      bodyElement.setAttribute("data-theme", "dark");
    }

    const selectedTheme = localStorage.getItem("theme");
    setThemeState(selectedTheme);
    if (selectedTheme && bodyElement !== null) {
      bodyElement.setAttribute("data-theme", selectedTheme);
    }
  }, []);

  return (
    <div
      className={clsx(
        styles["dark-mode"],
        themeState !== theme && styles.active,
      )}
    >
      <button onClick={setTheme}>{children}</button>
    </div>
  );
}
