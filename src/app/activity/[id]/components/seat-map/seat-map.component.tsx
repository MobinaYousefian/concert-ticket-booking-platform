"use client";
import { ReactElement } from "react";
import dynamic from "next/dynamic";

import styles from "./seat-map.module.css";

export default function SeatMapComponent(): ReactElement {
  const canvasWidth = 1000;
  const canvasHeight = 1000;

  const Canvas = dynamic(
    () => import("@/app/activity/[id]/components/canvas/canvas.component"),
    {
      ssr: false,
    },
  );

  return (
    <section className={styles["seat-map"]}>
      <Canvas width={canvasWidth} height={canvasHeight} />
    </section>
  );
}
