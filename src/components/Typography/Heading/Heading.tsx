import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ComponentProps } from "react";
import { getHeadingStyle } from './Heading.css';

type HeadingProps = ComponentProps<'h1'> & {
    children: React.ReactNode;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: "base" | "large";
    asChild?: boolean;
    className?: string;
}

export const Heading = ({ children, variant, size, asChild = false, className, ...props }: HeadingProps) => {
    const Component = asChild ? Slot : variant;
    const styles = getHeadingStyle({ size })

    return (
        <Component className={clsx(styles, className)} {...props}>
            {children}
        </Component>
    )
}