import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { ComponentProps } from "react";
import { vars } from "../../styles/theme.css";
import { iconStyle } from "./Icon.css";

type IconProps = ComponentProps<"div"> & {
  icon: React.FunctionComponent;
  size?: string;
  color?: string;
};

const Icon = ({
  icon: IconSvg,
  size = "16px",
  color = vars.color.gray,
  ...props
}: IconProps) => {
  return (
    <div
      className={clsx(iconStyle, props.className)}
      style={assignInlineVars({ fontSize: size, color })}
      {...props}
    >
      <IconSvg />
    </div>
  );
};

export default Icon;
