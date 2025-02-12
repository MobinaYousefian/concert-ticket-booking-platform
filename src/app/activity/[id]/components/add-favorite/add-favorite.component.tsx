import { ReactElement } from "react";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsFavourite from "@/icons/HugeiconsFavourite";

import styles from "./add-favorite.module.css";

export default function AddFavoriteComponent(): ReactElement {
  return (
    <ButtonComponent
      shape={"ghost"}
      variant={"muted"}
      className={styles["add-favorite"]}
    >
      <HugeiconsFavourite />
      <span>علاقه‌مندی‌ها</span>
    </ButtonComponent>
  );
}
