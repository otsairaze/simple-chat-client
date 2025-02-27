import { ComponentProps } from "react";

export const AccountSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width={"24"} height={"24"} {...props} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#fff">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="12" cy="7.25" r="5.73"></circle>
        <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"></path>
      </g>
    </svg>
  );
};
