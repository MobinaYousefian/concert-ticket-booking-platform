"use client";
import { ComponentProps, ReactElement, useEffect, useRef } from "react";

import { clsx } from "clsx";

import styles from "./canvas.module.css";

type Props = ComponentProps<"canvas"> & {
  draw(context: CanvasRenderingContext2D): void;
};

export default function CanvasComponent({
  id,
  width,
  height,
  className,
  draw,
  ...otherProps
}: Props): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (context) {
      draw(context);
    }
  }, [draw]);

  return (
    <canvas
      id={id}
      ref={canvasRef}
      width={width}
      height={height}
      className={clsx(styles.canvas, className)}
      {...otherProps}
    >
      مرورگر شما از این بخش پشتیبانی نمی‌کند.
    </canvas>
  );
}
