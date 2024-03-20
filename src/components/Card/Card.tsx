import { assignInlineVars } from "@vanilla-extract/dynamic";
import { card } from "./Card.css";

interface CardProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
}

export const Card = ({ children, width, height }: CardProps) => {
    return (
        <div className={card} style={assignInlineVars({ width, height })}>
            {children}
        </div>
    )
}