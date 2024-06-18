import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { ComponentProps } from "react";
import { getButtonStyle } from "./Button.css";

type ButtonProps = ComponentProps<'button'> & {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    width?: string;
    className?: string;
}

export const Button = ({ children, variant = 'primary', width, className, ...props }: ButtonProps) => {
    const styles = getButtonStyle({ variant });

    return (
        <button className={clsx(styles, className)} style={assignInlineVars({ width })} {...props}>
            {children}
        </button>
    )
}