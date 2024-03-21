import * as Tabs from "@radix-ui/react-tabs";
import { tabItem, tabList } from "./Tab.css";

interface TabRootProps {
    children: React.ReactNode;
    defaultValue: string;
}

interface TabListProps {
    children: React.ReactNode;
}

interface TabItemProps {
    title: string;
    value: string;
    icon?: JSX.Element;
}

export const Root = ({ children, defaultValue, ...props }: TabRootProps): JSX.Element => {
    return (
        <Tabs.Root defaultValue={defaultValue} {...props}>
            {children}
        </Tabs.Root>
    )
}

export const List = ({ children }: TabListProps) => <Tabs.List className={tabList}>{children}</Tabs.List>;

export const Item = ({ title, value, icon }: TabItemProps) => {
    return (
        <Tabs.Trigger value={value} className={tabItem}>
            {icon}
            {title}
        </Tabs.Trigger>
    )
}

export const Content = Tabs.Content