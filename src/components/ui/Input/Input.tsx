import clsx from "clsx";
import React, { ComponentProps, createContext, forwardRef, ReactNode, useContext, useId } from "react";
import styles from "./Input.module.css";

type InputVariant = "primary" | "secondary" | "search";

interface InputContextProps {
  id?: string;
  error?: string;
}

const InputContext = createContext<InputContextProps>({});

interface InputCompound {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const InputCompound = ({ id: externalId, children, className }: InputCompound) => {
  const id = externalId ?? useId();
  return (
    <InputContext.Provider value={{ id }}>
      <div className={clsx("text-white", styles.wrapper, className)}>{children}</div>
    </InputContext.Provider>
  );
};

interface InputProps extends ComponentProps<"input"> {
  error?: string;
  variant: InputVariant;
  className?: string;
}

InputCompound.Input = forwardRef<HTMLInputElement, InputProps>(({ error, className, variant = "primary", ...props }, ref) => {
  const { id } = React.useContext(InputContext);
  return <input className={clsx(styles.input, styles[variant], error && styles.error, className)} ref={ref} id={id} {...props} />;
});

type TitleProps<Tag extends TagVariant> = ComponentProps<Tag> & {
  id: string;
  tag?: TagVariant;
  className?: string;
  children: React.ReactNode;
};

type TagVariant = "h2" | "h3" | "h4" | "h5" | "h6" | "p";

InputCompound.Title = <Tag extends TagVariant = "h2">({ tag = "h2", className, children, ...props }: TitleProps<Tag>) => {
  const ComponentTitle = tag;

  const { id } = useContext(InputContext);

  return (
    <label htmlFor={id} className="ml-5 text-white">
      <ComponentTitle className={clsx(styles.title, className)} {...props}>
        {children}
      </ComponentTitle>
    </label>
  );
};

interface ErrorProps {
  error?: string | undefined;
  className?: string;
}

InputCompound.Error = ({ error, className }: ErrorProps) => {
  return error && <span className={clsx(styles.error, className)}>{error}</span>;
};

interface InputCompoundPropsSvg extends ComponentProps<"div"> {
  children: ReactNode;
  className?: string;
}

InputCompound.SvgInner = ({ children, className, ...props }: InputCompoundPropsSvg) => {
  return (
    <>
      <div className={clsx(styles.svg_inner, className)} {...props}>
        {children}
      </div>
    </>
  );
};
