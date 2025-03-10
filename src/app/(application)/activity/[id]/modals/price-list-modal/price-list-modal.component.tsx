import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import ModalBackgroundComponent from "@/components/modal-background/modal-background.component";

import { activity } from "@/lib/activity-data";
import { hallsPrices } from "@/lib/hall-data/halls-prices";

import { RowPrices } from "@/lib/hall-data/halls-prices.type";

import styles from "./price-list-modal.module.css";

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function PriceListModalComponent({
  setShowModal,
}: Props): ReactElement {
  const pathname = usePathname();
  const [priceData, setPriceData] = useState<RowPrices>({});

  /* this part is skipped when using a database */
  useEffect(() => {
    const activityId = pathname.split("/").at(-1);

    const currentActivity = activity.find(
      ({ id }) => id.toString() === activityId,
    );

    if (currentActivity) setPriceData(hallsPrices[currentActivity.hallId]);
  }, [pathname]);

  return (
    <ModalBackgroundComponent setShowModal={setShowModal}>
      <div className={styles["price-list-modal"]}>
        <ul role={"list"}>
          {Object.keys(priceData).map((priceKey) => {
            const priceObj = priceData[priceKey];

            return (
              <li key={priceObj.label}>
                <span className={styles.label}>{priceObj.label}</span>
                <span className={styles.price}>
                  {priceObj.value.toLocaleString()}
                  <span>تومان</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </ModalBackgroundComponent>
  );
}
