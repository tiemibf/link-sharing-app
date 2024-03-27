import * as Select from '@radix-ui/react-select';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import Icon from '../Icon/Icon';
import { selectContent, selectOption, selectSeparator, selectTrigger } from './Select.css';

interface SelectRootProps {
    name: string;
    defaultValue?: string;
    value?: string;
    children: React.ReactNode;
    onValueChange?: (value: string) => void;
}

export const Root = ({ defaultValue, value, name, children, onValueChange, ...props }: SelectRootProps) => {
    return (
        <Select.Root name={name} defaultValue={defaultValue} value={value} onValueChange={onValueChange} {...props}>
            {children}
        </Select.Root>
    )
}

interface SelectTriggerProps {
    placeholder?: string;
    width?: string;
    value?: string | React.ReactNode;
    renderValue?: React.ReactNode | string;
}

export const Trigger = ({ placeholder, width, value, renderValue }: SelectTriggerProps) => {

    return (
        <Select.Trigger className={selectTrigger} style={assignInlineVars({ width })}>
            <Select.Value placeholder={placeholder}>{renderValue || value}</Select.Value>
            <Select.Icon>
                <Icon name='chevron-down' />
            </Select.Icon>
        </Select.Trigger>
    )
}
interface SelectContentProps {
    children?: React.ReactNode;
}

export const Content = ({ children }: SelectContentProps) => {
    return (
        <Select.Portal>
            <Select.Content position="popper" className={selectContent}>
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
            <Select.Item value={value} className={selectOption}>
                {children}
            </Select.Item>
            {separator && <Select.Separator className={selectSeparator} />}
        </>
    )
}

