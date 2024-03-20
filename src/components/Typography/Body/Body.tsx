import { body } from "./Body.css";

interface BodyProps {
    children: React.ReactNode;
    size?: "small" | "base";

}

export const Body = ({ children, size, ...props }: BodyProps) => {
    return (
        <p className={body({ size })} {...props}>
            {children}
        </p>
    )
}