import React, { SVGProps } from "react";

export function HugeiconsAlertCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill={props.fill ? props.fill : "none"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="currentColor"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M11.992 15h.009M12 12V8"></path>
      </g>
    </svg>
  );
}
export default HugeiconsAlertCircle;
