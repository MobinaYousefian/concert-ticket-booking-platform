import { ReactElement, useRef } from "react";

import Konva from "konva";
import { Group, Layer, Path, Stage, Text } from "react-konva";

import {
  handleZoom,
  resetScaleZoom,
  handleZoomOnTouch,
  handleZoomOnTouchEnd,
  handleZoomOnWheel,
} from "@/app/activity/[id]/utils/canvas-functions.utils";

import ButtonComponent from "@/components/button/button.component";
import SeatsContainerComponent from "@/app/activity/[id]/components/canvas/seats-container/seats-container.component";

import HugeiconsSearchAdd from "@/icons/HugeiconsSearchAdd";
import HugeiconsCancel01 from "@/icons/HugeiconsCancel01";
import HugeiconsSearchMinus from "@/icons/HugeiconsSearchMinus";

import { WEST_MALL } from "@/lib/hall-data";

import styles from "./canvas.module.css";

type ButtonData = {
  id: number;
  icon: ReactElement;
  handleZoomToggle: (
    stageRefCurrent: Konva.Stage | null,
    direction?: 1 | -1,
  ) => void;
};

type Props = {
  width: number;
  height: number;
};

export default function CanvasComponent({
  width,
  height,
}: Props): ReactElement {
  const stageRef = useRef<Konva.Stage | null>(null);

  const buttons: ButtonData[] = [
    {
      id: 1,
      icon: <HugeiconsSearchAdd />,
      handleZoomToggle: () => handleZoom(stageRef.current, 1),
    },
    {
      id: 2,
      icon: <HugeiconsCancel01 />,
      handleZoomToggle: () => resetScaleZoom(stageRef.current),
    },
    {
      id: 3,
      icon: <HugeiconsSearchMinus />,
      handleZoomToggle: () => handleZoom(stageRef.current, -1),
    },
  ];

  const baseOffsetX = width / 20;

  return (
    <>
      <div className={styles["zoom-buttons"]}>
        {buttons.map(({ id, icon, handleZoomToggle }) => (
          <ButtonComponent
            key={id}
            size="sm"
            shape="ghost"
            variant="muted"
            className={styles.button}
            onClick={() => handleZoomToggle(stageRef.current)}
          >
            {icon}
          </ButtonComponent>
        ))}
      </div>
      <Stage
        width={width}
        height={height}
        className={styles.stage}
        ref={stageRef}
        draggable
        onWheel={handleZoomOnWheel}
        onTouchMove={handleZoomOnTouch}
        onTouchEnd={handleZoomOnTouchEnd}
      >
        <Layer>
          <Group x={baseOffsetX} y={0}>
            <Path
              fill="hsl(240 3.8% 46.1%)"
              data={`M ${0},0 A ${width / 2} ${width / 6} 0 0, 0 ${(9 * width) / 10}, 0`}
            />
            <Text
              text="صحنه اجرا"
              x={width / 2.4}
              y={width / 28}
              fill="white"
              fontFamily="Vazirmatn"
              fontSize={width / 56}
            />
            {WEST_MALL.seatSections.map(({ id, seatByRow }, sectionIndex) => (
              <SeatsContainerComponent
                key={id}
                seatByRow={seatByRow}
                canvasWidth={width}
                sectionIndex={sectionIndex}
              />
            ))}
          </Group>
        </Layer>
      </Stage>
    </>
  );
}
