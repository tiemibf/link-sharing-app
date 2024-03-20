import { heading } from "./Heading.css";

interface HeadingProps {
    children: React.ReactNode;
    size?: "base" | "large";
}

export const Heading = ({ children, size, ...props }: HeadingProps) => {
    return (
        <p className={heading({ size })} {...props}>
            {children}
        </p>
    )
}