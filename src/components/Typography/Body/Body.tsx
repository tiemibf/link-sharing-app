import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ComponentProps } from "react";
import { body } from "./Body.css";

type BodyProps = ComponentProps<"p"> & {
  children: React.ReactNode;
  size?: "small" | "base";
  color?: "darkGray" | "gray" | "red";
  asChild?: boolean;
  className?: string;
};

export const Body = ({
  children,
  size,
  color,
  asChild = false,
  className,
  ...props
}: BodyProps) => {
  const Component = asChild ? Slot : "p";
  const styles = body({ size, color });

  return (
    <Component className={clsx(styles, className)} {...props}>
      {children}
    </Component>
  );
};
