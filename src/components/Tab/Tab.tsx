import * as Tabs from "@radix-ui/react-tabs";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { tabItem, tabList } from "./Tab.css";

interface TabRootProps {
  children: React.ReactNode;
  defaultValue: string;
  onValueChange: (value: string) => void;
}

interface TabListProps {
  children: React.ReactNode;
}

interface TabItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  width?: string;
}

export const Root = ({
  children,
  defaultValue,
  ...props
}: TabRootProps): JSX.Element => {
  return (
    <Tabs.Root defaultValue={defaultValue} {...props}>
      {children}
    </Tabs.Root>
  );
};

export const List = ({ children }: TabListProps) => (
  <Tabs.List className={tabList}>{children}</Tabs.List>
);

export const Item = ({ value, children, className, width }: TabItemProps) => {
  return (
    <Tabs.Trigger
      value={value}
      className={clsx(tabItem, className)}
      style={assignInlineVars({ width })}
    >
      {children}
    </Tabs.Trigger>
  );
};

export const Content = Tabs.Content;
