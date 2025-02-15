import React from "react";

import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  variant?: ContainerVariant;
  className?: string;
}

type ContainerVariant = "main" | "primary";

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("max-w-[1600px] mx-auto", className)}>{children}</div>
  );
};
