import { assignInlineVars } from "@vanilla-extract/dynamic";
import { button } from "./Button.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    width?: string;
    onClick: () => void;
}

export const Button = ({ children, variant = 'primary', width, onClick, ...props }: ButtonProps) => {
    return (
        <button className={button({ variant })} style={assignInlineVars({ width })} onClick={onClick} {...props}>
            {children}
        </button>
    )
}