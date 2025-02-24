import { Dispatch, ReactElement, SetStateAction } from "react";

import ModalBackgroundComponent from "@/components/modal-background/modal-background.component";

import styles from "./price-list-modal.module.css";

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

type TempPrice = {
  label: string;
  price: number;
};
const tempPrices: TempPrice[] = [
  {
    label: "همکف - ردیف ۱ تا ۴: ",
    price: 840000,
  },
  {
    label: "همکف - ردیف ۵ تا ۶: ",
    price: 750000,
  },
  {
    label: "همکف - ردیف ۷ تا ۱۰: ",
    price: 600000,
  },
  {
    label: "بالکن - ردیف ۱ تا ۵: ",
    price: 420000,
  },
  {
    label: "بالکن - ردیف ۵ تا ۱۰: ",
    price: 350000,
  },
];

export default function PriceListModalComponent({
  setShowModal,
}: Props): ReactElement {
  return (
    <ModalBackgroundComponent setShowModal={setShowModal}>
      <div className={styles["price-list-modal"]}>
        <ul role={"list"}>
          {tempPrices.map(({ label, price }) => (
            <li key={price}>
              <span className={styles.label}>{label}</span>
              <span className={styles.price}>
                {price.toLocaleString()}
                <span>تومان</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ModalBackgroundComponent>
  );
}
