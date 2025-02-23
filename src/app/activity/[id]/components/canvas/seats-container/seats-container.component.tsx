import { ReactElement } from "react";

import { Group } from "react-konva";

import { SeatByRow } from "@/lib/data.type";

import SeatComponent from "@/app/activity/[id]/components/canvas/seat/seat.component";

type Props = {
  seatByRow: SeatByRow;
  canvasWidth: number;
  sectionIndex: number;
};

export default function SeatsContainerComponent({
  seatByRow,
  canvasWidth,
  sectionIndex,
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
            </>
          );
      })}
    </Group>
  );
}
