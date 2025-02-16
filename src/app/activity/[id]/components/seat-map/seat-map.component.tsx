"use client";
import { ReactElement } from "react";

import CanvasComponent from "@/app/activity/[id]/components/canvas/canvas.component";

import styles from "./seat-map.module.css";

export default function SeatMapComponent(): ReactElement {
  const canvasWidth = 600;
  const canvasHeight = 300;

  const draw = (context: CanvasRenderingContext2D) => {
    const centerX = canvasWidth / 2;
    const radius = canvasWidth / 2;
    const centerY = -radius / 1.2;
    const startingAngle = Math.PI;
    const endingAngle = 0;
    const counterclockwise = true;

    context.arc(
      centerX,
      centerY,
      radius,
      startingAngle,
      endingAngle,
      counterclockwise,
    );

    context.fillStyle = "#369";
    context.fill();
  };

  return (
    <section className={styles["seat-map"]}>
      <CanvasComponent
        id={"1"}
        width={canvasWidth}
        height={canvasHeight}
        draw={draw}
      />
    </section>
  );
}
