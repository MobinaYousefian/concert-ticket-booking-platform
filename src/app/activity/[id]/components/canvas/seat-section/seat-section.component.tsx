import { ReactElement } from "react";

import { Group, Rect, Text } from "react-konva";

import { SeatByRow } from "@/lib/data.type";

const BookStats = {
  booked: "hsl(2 75% 58%)",
  pending: "hsl(32.1 90% 64%)",
  free: "hsl(142.1 76.2% 36.3%)",
  nonSale: "hsl(240 10% 60%)",
};

type Props = {
  seatByRow: SeatByRow;
  canvasWidth: number;
  sectionIndex: number;
};

export default function SeatSectionComponent({
  seatByRow,
  canvasWidth,
  sectionIndex,
}: Props): ReactElement {
  const desktopOffset = canvasWidth >= 736 ? canvasWidth / 70 : 0;
  const desktopRectMargin = canvasWidth >= 736 ? 2 : 1;

  const offsetX = desktopOffset + sectionIndex * (canvasWidth / 3.5);
  const offsetY = canvasWidth / 8;
  const seatWidth = canvasWidth / 50;
  const seatHeight = canvasWidth / 50;

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
                    <>
                      <Rect
                        key={seat.id}
                        x={seatIndex * (seatWidth + desktopRectMargin)}
                        y={rowIndex * (seatHeight + desktopRectMargin)}
                        width={seatWidth}
                        height={seatHeight}
                        fill={BookStats[seat.status]}
                      />
                      <Text
                        key={"seat_number" + seat.id}
                        text={`${seat.seatNumber}`}
                        x={
                          seatIndex * (seatWidth + desktopRectMargin) +
                          seatWidth / 3
                        }
                        y={
                          rowIndex * (seatHeight + desktopRectMargin) +
                          seatHeight / 3
                        }
                        fontFamily={"Vazirmatn"}
                        fontSize={canvasWidth / 100}
                        fill={"hsl(240 4.8% 95.9%)"}
                      />
                    </>
                  );
              })}
            </>
          );
      })}
    </Group>
  );
}
