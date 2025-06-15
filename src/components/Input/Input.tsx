import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ComponentProps } from "react";
import { vars } from "../../styles/theme.css";
import Icon from "../Icon/Icon";
import {
  errorStyle,
  inputIconStyle,
  inputStyle,
  inputWrapperStyle,
} from "./Input.css";

type InputProps = ComponentProps<"input"> & {
  icon?: React.FunctionComponent;
  hasError?: boolean;
  errorMessage?: string;
  width?: string;
};

export const Input = React.forwardRef(
  (
    { icon, hasError, errorMessage, width, ...props }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={inputWrapperStyle} data-invalid={hasError} style={assignInlineVars({ width, backgroundColor: vars.color.white })}>
        {icon && (
          <div className={inputIconStyle}>
            <Icon icon={icon} />
          </div>
        )}
        <input type="text" className={inputStyle} ref={ref} {...props} />
        {hasError && <div className={errorStyle}>{errorMessage}</div>}
      </div>
    );
  },
);
