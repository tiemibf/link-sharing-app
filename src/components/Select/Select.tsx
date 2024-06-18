import * as Select from '@radix-ui/react-select';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import React from 'react';
import { IconChevronDown } from '../../assets';
import { vars } from '../../styles/theme.css';
import Icon from '../Icon/Icon';
import { selectContentStyle, selectOptionStyle, selectSeparatorStyle, selectTriggerStyle } from './Select.css';

type SelectRootProps = Select.SelectProps & {
    children: React.ReactNode;
}

export const Root = ({ children, ...props }: SelectRootProps) => {
    return (
        <Select.Root  {...props}>
            {children}
        </Select.Root>
    )
}

interface SelectTriggerProps {
    children: React.ReactNode;
    placeholder?: string;
    width?: string;
}

export const Trigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(({ placeholder, width, children }: SelectTriggerProps, ref) => {
    return (
        <Select.Trigger className={selectTriggerStyle} style={assignInlineVars({ width })} ref={ref}>
            <Select.Value placeholder={placeholder}>
                {children}
            </Select.Value>
            <Select.Icon>
                <Icon icon={IconChevronDown} color={vars.color.purple} />
            </Select.Icon>
        </Select.Trigger>
    )
})

type SelectContentProps = Select.SelectContentProps & {
    children?: React.ReactNode;
}

export const Content = ({ children }: SelectContentProps) => {
    const themeProviderNode = document.getElementById("themeProvider");

    return (
        <Select.Portal container={themeProviderNode}>
            <Select.Content position="popper" className={selectContentStyle}>
                <Select.Viewport>
                    <Select.Group>
                        {children}
                    </Select.Group>
                </Select.Viewport>
            </Select.Content>
        </Select.Portal>
    )
}

interface SelectOptionProps {
    value: string;
    children: React.ReactNode;
    separator?: boolean;
}

export const Option = ({ value, children, separator }: SelectOptionProps) => {
    return (
        <>
            <Select.Item value={value} className={selectOptionStyle}>
                {children}
            </Select.Item>
            {separator && <Select.Separator className={selectSeparatorStyle} />}
        </>
    )
}

