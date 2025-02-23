import clsx from "clsx";
import React, { ComponentProps } from "react";
import styles from "./Typography.module.css";

type TagVariant = "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type TypographyVariant = "title28_semibold" | "title16_regular" | "title20_semibold" | "title18_medium";

type TypographyProps<T extends TagVariant> = ComponentProps<T> & {
  tag: TagVariant;
  children: React.ReactNode;
  variant: TypographyVariant;
  className?: string;
};

export const Typography = <T extends TagVariant = "p">({ tag, children, variant, className, ...props }: TypographyProps<T>) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
