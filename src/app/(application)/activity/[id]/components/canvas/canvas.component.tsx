import { ReactElement, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import Konva from "konva";
import { Group, Layer, Path, Stage, Text } from "react-konva";

import {
  handleZoom,
  resetScaleZoom,
  handleZoomOnTouch,
  handleZoomOnTouchEnd,
  handleZoomOnWheel,
} from "@/app/(application)/activity/[id]/utils/canvas-functions.utils";

import ButtonComponent from "@/components/button/button.component";
import RowComponent from "@/app/(application)/activity/[id]/components/canvas/row/row.component";

import HugeiconsSearchAdd from "@/icons/HugeiconsSearchAdd";
import HugeiconsCancel01 from "@/icons/HugeiconsCancel01";
import HugeiconsSearchMinus from "@/icons/HugeiconsSearchMinus";

import { activity } from "@/lib/activity-data";
import { halls } from "@/lib/hall-data/halls";

import { Hall } from "@/lib/hall-data/hall.type";

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
  const pathname = usePathname();
  const [hallData, setHallData] = useState<Hall | null>(null);

  const stageRef = useRef<Konva.Stage | null>(null);

  const buttons: ButtonData[] = [
    {
      id: 1,
      icon: <HugeiconsSearchAdd />,
      handleZoomToggle: () => handleZoom(stageRef.current, width, height, 1),
    },
    {
      id: 2,
      icon: <HugeiconsCancel01 />,
      handleZoomToggle: () => resetScaleZoom(stageRef.current),
    },
    {
      id: 3,
      icon: <HugeiconsSearchMinus />,
      handleZoomToggle: () => handleZoom(stageRef.current, width, height, -1),
    },
  ];

  const responsiveScale = width >= 736 ? 0.8 : 1;
  const baseOffsetX = width >= 736 ? width / 4.5 : width / 6;

  /* this part is skipped when using a database */
  useEffect(() => {
    const activityId = pathname.split("/").at(-1);

    const currentActivity = activity.find(
      ({ id }) => id.toString() === activityId,
    );

    if (currentActivity) setHallData(halls[currentActivity.hallId]);
  }, [pathname]);

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
          <Group
            x={baseOffsetX}
            y={0}
            scaleX={responsiveScale}
            scaleY={responsiveScale}
          >
            <Path
              fill="hsl(240 12% 50%)"
              data={`M 0,0 A ${width / 2} ${width / 5} 0 0, 0 ${(2 * width) / 3}, 0`}
            />
            <Text
              text="صحنه اجرا"
              x={width / 3.35}
              y={width / 50}
              fill="white"
              fontFamily="Vazirmatn"
              fontSize={width / 56}
            />
            {hallData &&
              hallData.seatsByRow.map((row, rowIndex) => {
                if (row)
                  return (
                    <RowComponent
                      key={rowIndex}
                      row={row}
                      rowIndex={rowIndex}
                      canvasWidth={width}
                      getRowsOffsetX={hallData.getRowsOffsetX}
                      getRowsOffsetY={hallData.getRowsOffsetY}
                      getCanvasMidPoint={hallData.getCanvasMidPoint}
                    />
                  );
              })}
          </Group>
        </Layer>
      </Stage>
    </>
  );
}
