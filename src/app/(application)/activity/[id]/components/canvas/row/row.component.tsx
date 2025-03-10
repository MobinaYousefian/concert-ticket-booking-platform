import { ReactElement } from "react";

import { Group, Text } from "react-konva";

import SeatComponent from "@/app/(application)/activity/[id]/components/canvas/seat/seat.component";

import {
  GetCanvasMidPoint,
  GetRowsOffset,
  Seat,
} from "@/lib/hall-data/hall.type";

type Props = {
  canvasWidth: number;
  row: Seat[];
  rowIndex: number;
  getRowsOffsetX: GetRowsOffset;
  getRowsOffsetY: GetRowsOffset;
  getCanvasMidPoint: GetCanvasMidPoint;
};

export default function RowComponent({
  canvasWidth,
  row,
  rowIndex,
  getRowsOffsetX,
  getRowsOffsetY,
  getCanvasMidPoint,
}: Props): ReactElement | null {
  const desktopRectMargin = canvasWidth >= 736 ? 2 : 1;

  const seatWidth = canvasWidth / 60;
  const seatHeight = canvasWidth / 60;

  const seatsOffsetX = 0;
  const seatsOffsetY = canvasWidth / 14;

  const groupWidth = row.length * (seatWidth + desktopRectMargin);
  const groupX = getCanvasMidPoint(canvasWidth) - groupWidth / 2;

  return (
    <Group
      x={groupX}
      offsetX={getRowsOffsetX(seatWidth, desktopRectMargin)[rowIndex] - groupX}
      offsetY={getRowsOffsetY(seatWidth, desktopRectMargin)[rowIndex]}
    >
      <Text
        text={(rowIndex + 1).toString()}
        x={-seatWidth}
        y={seatsOffsetY + seatWidth / 3}
        offsetY={-(rowIndex * (seatWidth + desktopRectMargin))}
        fontFamily="Vazirmatn"
        fontSize={canvasWidth / 80}
      />
      {row.map((seat, seatIndex) => {
        if (seat)
          return (
            <SeatComponent
              key={seat.id}
              seat={seat}
              canvasWidth={canvasWidth}
              rowIndex={rowIndex}
              seatIndex={seatIndex}
              desktopRectMargin={desktopRectMargin}
              seatWidth={seatWidth}
              seatHeight={seatHeight}
              seatsOffsetX={seatsOffsetX}
              seatsOffsetY={seatsOffsetY}
            />
          );
      })}
      <Text
        text={(rowIndex + 1).toString()}
        x={(row.length - 1) * (seatWidth + desktopRectMargin) + seatWidth * 1.5}
        y={seatsOffsetY + seatWidth / 3}
        offsetY={-(rowIndex * (seatWidth + desktopRectMargin))}
        fontFamily="Vazirmatn"
        fontSize={canvasWidth / 80}
      />
    </Group>
  );
}
