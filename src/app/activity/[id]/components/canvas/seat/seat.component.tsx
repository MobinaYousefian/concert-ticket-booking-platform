import { ReactElement, useContext } from "react";

import { Group, Rect, Text } from "react-konva";

import { SeatsContext } from "@/app/activity/[id]/providers/seats/seats.provider.component";
import { PopoverContext } from "@/app/activity/[id]/providers/popover/popover.provider";

import { handleShowPopover } from "@/app/activity/[id]/utils/canvas-functions.utils";

import { Seat } from "@/lib/data.type";
import { SeatType } from "@/types/seats.type";

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
  seatOffsetX: number;
  seatOffsetY: number;
  seatWidth: number;
  seatHeight: number;
};

export default function SeatComponent({
  seat,
  canvasWidth,
  seatOffsetX,
  seatOffsetY,
  seatWidth,
  seatHeight,
}: Props): ReactElement | undefined {
  const { seats, dispatchSeats } = useContext(SeatsContext);
  const { setPopoverData } = useContext(PopoverContext);

  const handleToggleSeat = (seat: Seat) => {
    if (!seat || seat.status !== "free") return;
    dispatchSeats({
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

  if (seat !== null)
    return (
      <Group
        onMouseEnter={(e) => handleShowPopover(e, seat, setPopoverData)}
        onMouseLeave={() => {
          setPopoverData(null);
        }}
        onClick={() => handleToggleSeat(seat)}
        onTap={() => handleToggleSeat(seat)}
      >
        <Rect
          x={seatOffsetX}
          y={seatOffsetY}
          width={seatWidth}
          height={seatHeight}
          fill={handleChangeFill(seat.id, seat.status)}
          perfectDrawEnabled={false}
          listening={seat.status === "free"}
        />
        <Text
          key={"seat_number" + seat.id}
          text={`${seat.seatNumber}`}
          x={seatOffsetX + seatWidth / 3}
          y={seatOffsetY + seatHeight / 3}
          fontFamily="Vazirmatn"
          fontSize={canvasWidth / 100}
          fill="hsl(240 4.8% 95.9%)"
        />
      </Group>
    );
}
