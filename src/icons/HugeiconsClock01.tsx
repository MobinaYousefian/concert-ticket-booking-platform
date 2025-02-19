import React, { SVGProps } from "react";

export function HugeiconsClock01(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="currentColor"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8v4l2 2"></path>
      </g>
    </svg>
  );
}
export default HugeiconsClock01;
