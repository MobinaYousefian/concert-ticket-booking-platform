import { ReactElement } from "react";

import { Group, Text } from "react-konva";

import { SeatByRow } from "@/lib/data.type";

import SeatComponent from "@/app/activity/[id]/components/canvas/seat/seat.component";

type Props = {
  seatByRow: SeatByRow;
  canvasWidth: number;
  sectionIndex: number;
  seatSectionsLength: number;
};

export default function SeatsContainerComponent({
  seatByRow,
  canvasWidth,
  sectionIndex,
  seatSectionsLength,
}: Props): ReactElement {
  const desktopOffset = canvasWidth >= 736 ? canvasWidth / 70 : 0;

  const offsetX = desktopOffset + sectionIndex * (canvasWidth / 3.5);
  const offsetY = canvasWidth / 8;

  return (
    <Group x={offsetX} y={offsetY}>
      {Object.keys(seatByRow).map((rowKey, rowIndex) => {
        const row = seatByRow[rowKey];

        if (row !== null)
          return (
            <>
              {sectionIndex === 0 && (
                <Text
                  text={rowKey}
                  x={0}
                  y={rowIndex * (canvasWidth / 46)}
                  offsetX={rowIndex === 0 ? -(2 * (canvasWidth / 50)) + 10 : 20}
                  offsetY={-canvasWidth / 200}
                  fontFamily={"Vazirmatn"}
                  fontSize={16}
                />
              )}
              {row.map((seat, seatIndex) => {
                if (seat !== null)
                  return (
                    <SeatComponent
                      key={seat.id}
                      rowIndex={rowIndex}
                      seat={seat}
                      seatIndex={seatIndex}
                      canvasWidth={canvasWidth}
                    />
                  );
              })}
              {seatSectionsLength - sectionIndex === 1 && (
                <Text
                  text={rowKey}
                  x={0}
                  y={rowIndex * (canvasWidth / 46)}
                  offsetX={-(row.length * (canvasWidth / 45))}
                  offsetY={-canvasWidth / 200}
                  fontFamily={"Vazirmatn"}
                  fontSize={16}
                />
              )}
            </>
          );
      })}
    </Group>
  );
}
