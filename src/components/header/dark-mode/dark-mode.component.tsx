"use client";
import { ReactElement, useEffect, useState } from "react";

import HugeiconsSun03 from "@/icons/HugeiconsSun03";
import HugeiconsMoon02 from "@/icons/HugeiconsMoon02";

import styles from "./dark-mode.module.css";

export default function DarkModeComponent(): ReactElement {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  let prefersDarkScheme: MediaQueryList;

  useEffect(() => {
    /* user op set to dark mode: */
    prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    /* get user selected theme: */
    setCurrentTheme(localStorage.getItem("theme"));

    /* change theme classes on html element based on localstorage value */
    if (currentTheme == "dark") {
      document.documentElement.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
      document.documentElement.classList.toggle("light-theme");
    }
  }, [currentTheme]);

  const handleChangeTheme = () => {
    let theme: string;

    if (prefersDarkScheme.matches) {
      document.documentElement.classList.toggle("light-theme");
      theme = document.documentElement.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.documentElement.classList.toggle("dark-theme");
      theme = document.documentElement.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
  };

  return (
    <div className={styles["dark-mode"]}>
      <button onClick={handleChangeTheme}>
        {currentTheme === "dark" ? (
          <HugeiconsSun03 className={styles.sun} />
        ) : (
          (currentTheme === null || "light") && (
            <HugeiconsMoon02 className={styles.moon} />
          )
        )}
      </button>
    </div>
  );
}
