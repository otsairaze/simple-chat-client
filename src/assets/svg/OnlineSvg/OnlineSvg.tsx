import { ComponentProps } from "react";
import styles from "./OnlineSvg.module.css";

type Variant = "online" | "offline";

interface SvgProps extends ComponentProps<"svg"> {
  variant: Variant;
}

export const OnlineSvg = ({ variant, ...props }: SvgProps) => {
  return (
    <svg {...props} width="15" height="15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" className={styles[variant]} />
    </svg>
  );
};
