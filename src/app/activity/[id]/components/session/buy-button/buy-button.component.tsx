"use client";
import { ReactElement, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsShoppingBag02 from "@/icons/HugeiconsShoppingBag02";

import { ActivitySession } from "@/lib/data.type";

import styles from "./buy-button.module.css";

type Props = {
  remainingTickets: ActivitySession["remainingTickets"];
  sessionId: ActivitySession["id"];
};

export default function BuyButtonComponent({
  remainingTickets,
  sessionId,
}: Props): ReactElement {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleOpenSession = () => {
    router.push(
      pathname + "?" + createQueryString("sessionId", sessionId.toString()),
    );
  };

  return (
    <ButtonComponent
      className={styles["buy-button"]}
      disabled={remainingTickets === 0}
      onClick={handleOpenSession}
    >
      <HugeiconsShoppingBag02 />
      خرید بلیت
    </ButtonComponent>
  );
}
