import { ComponentProps } from "react";

export const BurgerSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" width={"24"} height={"24"}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>{" "}
      </g>
    </svg>
  );
};
