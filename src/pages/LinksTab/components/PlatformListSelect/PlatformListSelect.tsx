import { SelectProps } from "@radix-ui/react-select";
import { IconLink } from "../../../../assets";
import Icon from "../../../../components/Icon/Icon";
import { Select } from "../../../../components/Select";
import { platformsList } from "../../../../utils/platformsList";
import { triggerValueStyle } from "./PlatformListSelect.css";

type PlatformListSelectProps = SelectProps;

export const PlatformListSelect = ({
  value,
  ...props
}: PlatformListSelectProps) => {
  const renderValue = (value?: string) => {
    return (
      <div className={triggerValueStyle}>
        <Icon
          icon={
            platformsList.find((platform) => platform.name === value)?.icon ??
            IconLink
          }
        />
        {value}
      </div>
    );
  };

  return (
    <Select.Root value={value} {...props}>
      <Select.Trigger placeholder="Select a platform" width="100%">
        {renderValue(value)}
      </Select.Trigger>
      <Select.Content>
        {platformsList.map((platform, index) => {
          const isLastItem = index === platformsList.length - 1;
          return (
            <Select.Option
              key={platform.id}
              value={platform.name}
              separator={!isLastItem}
            >
              <Icon icon={platform.icon} />
              {platform.name}
            </Select.Option>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
};
