import { Dispatch, SetStateAction } from "react";

import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;

import { SeatType } from "@/types/seats.type";
import { PopoverType } from "@/types/popover.type";

type P = {
  x: number;
  y: number;
};

const getDistance = (p1: P, p2: P): number => {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

const getCenter = (p1: P, p2: P) => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
};

let lastCenter: P | null = null;
let lastDist = 0;
let dragStopped = false;

export const handleZoomOnTouch = (e: Konva.KonvaEventObject<TouchEvent>) => {
  e.evt.preventDefault();

  Konva.hitOnDragEnabled = true;

  const stage = e.target.getStage();
  if (stage === null) return;

  const touch1 = e.evt.touches[0];
  const touch2 = e.evt.touches[1];

  // we need to restore dragging, if it was cancelled by multi-touch
  if (touch1 && !touch2 && !stage.isDragging() && dragStopped) {
    stage.startDrag();
    dragStopped = false;
  }

  if (touch1 && touch2) {
    // if the stage was under Konva's drag&drop
    // we need to stop it, and implement our own pan logic with two pointers
    if (stage.isDragging()) {
      dragStopped = true;
      stage.stopDrag();
    }
  }

  const p1 = {
    x: touch1.clientX,
    y: touch1.clientY,
  };
  const p2 = {
    x: touch2.clientX,
    y: touch2.clientY,
  };

  if (!lastCenter) {
    lastCenter = getCenter(p1, p2);
    return;
  }

  const newCenter = getCenter(p1, p2);

  const dist = getDistance(p1, p2);
  if (!lastDist) {
    lastDist = dist;
  }

  // local coordinates of center point
  const pointTo = {
    x: (newCenter.x - stage.x()) / stage.scaleX(),
    y: (newCenter.y - stage.y()) / stage.scaleX(),
  };

  const scale = stage.scaleX() * (dist / lastDist);

  stage.scaleX(scale);
  stage.scaleY(scale);

  // calculate new position of the stage
  const dx = newCenter.x - lastCenter.x;
  const dy = newCenter.y - lastCenter.y;

  const newPos = {
    x: newCenter.x - pointTo.x * scale + dx,
    y: newCenter.y - pointTo.y * scale + dy,
  };

  stage.position(newPos);

  lastDist = dist;
  lastCenter = newCenter;
};

export const handleZoomOnTouchEnd = () => {
  lastDist = 0;
  lastCenter = null;
};

export const handleZoomOnWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
  e.evt.preventDefault();

  const scaleBy = 1.15;

  const stage = e.target.getStage();
  if (stage === null) return;

  const oldScale = stage.scaleX();

  const pointer = stage.getPointerPosition();
  if (pointer === null) return;

  const mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  };

  // determine zoom direction (in, out)
  const direction = e.evt.deltaY > 0 ? -1 : 1;

  const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;
  stage.scale({ x: newScale, y: newScale });

  const newPos = {
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  };
  stage.position(newPos);
};

/* helper buttons functions */
export const handleZoom = (
  stageRefCurrent: Konva.Stage | null,
  direction?: 1 | -1,
) => {
  if (stageRefCurrent) {
    const scaleBy = 1.3;
    const oldScale = stageRefCurrent.scaleX();
    const newScale = direction === 1 ? oldScale * scaleBy : oldScale / scaleBy;

    stageRefCurrent.scale({ x: newScale, y: newScale });
  }
};

export const resetScaleZoom = (stageRefCurrent: Konva.Stage | null) => {
  if (stageRefCurrent) {
    stageRefCurrent.position({ x: 0, y: 0 });
    stageRefCurrent.scale({ x: 1, y: 1 });
  }
};

export const handleMouseMove = (
  e: KonvaEventObject<MouseEvent>,
  seat: SeatType,
  setPopoverData: Dispatch<SetStateAction<PopoverType>>,
) => {
  const seatPos = e.target.getPosition();

  const container = e.target.getStage()?.container();
  if (container) {
    if (seat.status === "free") {
      setPopoverData({
        position: seatPos,
        seatPrice: seat.seatPrice,
        seatLabel: `شماره ${seat.seatNumber} ردیف ${seat.rowNumber}`,
      });
      container.style.cursor = "pointer";
    } else {
      container.style.cursor = "default";
    }
  }
};
