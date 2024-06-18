import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { getCardStyles } from "./Card.css";

interface CardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
  className?: string;
}

export const Card = ({
  children,
  width,
  height,
  backgroundColor,
  className,
}: CardProps) => {
  const styles = getCardStyles();

  return (
    <div
      className={clsx(styles, className)}
      style={assignInlineVars({ width, height, backgroundColor })}
    >
      {children}
    </div>
  );
};
