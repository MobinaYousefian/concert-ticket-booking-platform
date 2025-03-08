import { ReactElement, useContext } from "react";

import { Group, Rect, Text } from "react-konva";

import { handleShowPopover } from "@/app/(application)/activity/[id]/utils/canvas-functions.utils";

import { SeatsContext } from "@/app/(application)/activity/[id]/providers/seats/seats.provider";
import { PopoverContext } from "@/app/(application)/activity/[id]/providers/popover/popover.provider";

import { SeatType } from "@/types/seats.type";
import { Seat } from "@/lib/hall-data/hall.type";

const BookStats = {
  booked: "hsl(2 75% 58%)",
  pending: "hsl(32.1 90% 64%)",
  free: "hsl(142.1 76.2% 36.3%)",
  nonSale: "hsl(240 10% 60%)",
  selected: "hsl(219,70%,53%)",
};

type Props = {
  seat: Seat;
  canvasWidth: number;
  seatIndex: number;
  rowIndex: number;
  desktopRectMargin: number;
  seatWidth: number;
  seatHeight: number;
  seatsOffsetX: number;
  seatsOffsetY: number;
};

export default function SeatComponent({
  seat,
  canvasWidth,
  rowIndex,
  seatIndex,
  desktopRectMargin,
  seatWidth,
  seatHeight,
  seatsOffsetX,
  seatsOffsetY,
}: Props): ReactElement | undefined {
  const seatX = seatIndex * (seatWidth + desktopRectMargin);
  const seatY = rowIndex * (seatHeight + desktopRectMargin);

  const { seats, dispatchSeats } = useContext(SeatsContext);
  const { setPopoverData } = useContext(PopoverContext);

  const handleToggleSeat = (seat: Seat) => {
    if (!seat || seat.status !== "free") return;
    dispatchSeats({
      type: "toggle_seat",
      id: seat.id,
      seatNumber: seat.seatNumber,
      seatPrice: seat.seatPrice,
      rowNumber: seat.rowNumber,
    });
  };

  const handleChangeFill = (
    id: SeatType["id"],
    status: SeatType["status"],
  ): string => {
    const isSelected = seats.find((seat) => seat.id === id);

    if (isSelected) return BookStats["selected"];
    return BookStats[status];
  };

  if (seat)
    return (
      <Group
        offsetX={-seatsOffsetX}
        offsetY={-seatsOffsetY}
        onMouseEnter={(e) => handleShowPopover(e, seat, setPopoverData)}
        onMouseLeave={() => {
          setPopoverData(null);
        }}
        onClick={() => handleToggleSeat(seat)}
        onTap={() => handleToggleSeat(seat)}
      >
        <Rect
          x={seatX}
          y={seatY}
          width={seatWidth}
          height={seatHeight}
          fill={handleChangeFill(seat.id, seat.status)}
          perfectDrawEnabled={false}
          listening={seat.status === "free"}
        />
        <Text
          x={seatX + seatWidth / 4}
          y={seatY + seatHeight / 3}
          text={seat.seatNumber.toString()}
          fontFamily="Vazirmatn"
          fontSize={canvasWidth / 100}
          fill="hsl(240 4.8% 95.9%)"
        />
      </Group>
    );
}
