import clsx from "clsx";
import React from "react";
import styles from "./Typography.module.css";

type tag = "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyVariant = "title28_semibold" | "title16_regular";

interface TypographyProps {
  tag: tag;
  children: React.ReactNode;
  variant: TypographyVariant;
  className?: string;
}

export const Typography = ({
  tag,
  children,
  variant,
  className,
}: TypographyProps) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], className)}>
      {children}
    </Component>
  );
};
