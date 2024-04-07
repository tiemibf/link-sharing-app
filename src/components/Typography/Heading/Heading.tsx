import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ComponentProps } from "react";
import { getHeadingStyle } from './Heading.css';

type HeadingProps = ComponentProps<'h1'> & {
    children: React.ReactNode;
    size?: "base" | "large";
    asChild?: boolean;
    className?: string;
}

export const Heading = ({ children, size, asChild = false, className, ...props }: HeadingProps) => {
    const Component = asChild ? Slot : 'h1';
    const styles = getHeadingStyle({ size })

    return (
        <Component className={clsx(styles, className)} {...props}>
            {children}
        </Component>
    )
}