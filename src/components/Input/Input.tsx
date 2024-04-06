import React, { ComponentProps } from "react";
import Icon from "../Icon/Icon";
import { errorStyle, inputIconStyle, inputStyle, inputWrapperStyle } from "./Input.css";


type InputProps = ComponentProps<'input'> & {
    iconName?: string;
    hasError?: boolean;
    errorMessage?: string;
}

export const Input = React.forwardRef(({ iconName, hasError, errorMessage, ...props }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={inputWrapperStyle} data-invalid={hasError}>
            {iconName &&
                <div className={inputIconStyle}>
                    <Icon name={iconName} />
                </div>
            }
            <input type="text" className={inputStyle} ref={ref} {...props} />
            {hasError && <div className={errorStyle}>{errorMessage}</div>}
        </div>
    )
})