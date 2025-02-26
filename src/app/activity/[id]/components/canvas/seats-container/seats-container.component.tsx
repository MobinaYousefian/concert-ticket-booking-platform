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

  const seatWidth = canvasWidth / 50;
  const seatHeight = canvasWidth / 50;

  const desktopRectMargin = canvasWidth >= 736 ? 2 : 1;

  return (
    <Group x={offsetX} y={offsetY}>
      {Object.keys(seatByRow).map((rowKey, rowIndex) => {
        const row = seatByRow[rowKey];

        if (row !== null)
          return (
            <>
              {row.map((seat, seatIndex) => {
                const seatOffsetX = seatIndex * (seatWidth + desktopRectMargin);
                const seatOffsetY = rowIndex * (seatHeight + desktopRectMargin);

                if (seat)
                  return (
                    <Group key={seatIndex}>
                      {sectionIndex === 0 && seatIndex === 0 && (
                        <Text
                          text={rowKey}
                          x={seatOffsetX}
                          y={seatOffsetY}
                          offsetX={seatWidth}
                          offsetY={-seatHeight / 3}
                          fontFamily={"Vazirmatn"}
                          fontSize={canvasWidth / 80}
                        />
                      )}
                      <SeatComponent
                        key={seat.id}
                        seat={seat}
                        canvasWidth={canvasWidth}
                        seatOffsetX={seatOffsetX}
                        seatOffsetY={seatOffsetY}
                        seatWidth={seatWidth}
                        seatHeight={seatHeight}
                      />
                      {seatSectionsLength - sectionIndex === 1 &&
                        row.length - seatIndex === 1 && (
                          <Text
                            text={rowKey}
                            x={seatOffsetX}
                            y={seatOffsetY}
                            offsetX={-1.5 * seatWidth}
                            offsetY={-seatHeight / 3}
                            fontFamily={"Vazirmatn"}
                            fontSize={canvasWidth / 80}
                          />
                        )}
                    </Group>
                  );
              })}
            </>
          );
      })}
    </Group>
  );
}
