import { ComponentProps } from "react";
import { Typography } from "../Typography";
import { textButtonStyle, textStyle } from "./TextButton.css";

type TextButtonProps = ComponentProps<'button'> & {
    children: React.ReactNode,
    size: 'small' | 'base'
}

export const TextButton = ({ children, size, ...props }: TextButtonProps) => {
    return (
        <button className={textButtonStyle} {...props}>
            <Typography.Body size={size} className={textStyle}>{children}</Typography.Body>
        </button>
    )
}