import { ReactElement } from "react";

import { Layer, Rect, Stage } from "react-konva";

import {
  handleZoomOnTouch,
  handleZoomOnTouchEnd,
  handleZoomOnWheel,
} from "@/app/activity/[id]/utils/canvas-functions";

import styles from "./canvas.module.css";

type Props = {
  width: number;
  height: number;
};

export default function CanvasComponent({
  width,
  height,
}: Props): ReactElement {
  return (
    <Stage
      width={width}
      height={height}
      className={styles.stage}
      draggable
      onWheel={handleZoomOnWheel}
      onTouchMove={handleZoomOnTouch}
      onTouchEnd={handleZoomOnTouchEnd}
    >
      <Layer>
        <Rect
          fill="red"
          height={100}
          width={100}
          x={100}
          y={100}
          onMouseOver={() => {
            console.log("hovered");
          }}
          onClick={(e) => {
            e.currentTarget.setAttr("fill", "blue");
          }}
        />
      </Layer>
    </Stage>
  );
}
