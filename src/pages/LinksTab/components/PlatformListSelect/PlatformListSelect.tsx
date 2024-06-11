import { SelectProps } from '@radix-ui/react-select';
import Icon from "../../../../components/Icon/Icon";
import { Select } from "../../../../components/Select";
import { platformsList } from "../../../../utils/platformsList";
import { triggerValueStyle } from './PlatformListSelect.css';

type PlatformListSelectProps = SelectProps & {
    selectedPlatform?: string;
}

export const PlatformListSelect = ({ selectedPlatform, ...props }: PlatformListSelectProps) => {
    const renderValue = (value?: string) => {
        return (
            <div className={triggerValueStyle}>
                <Icon name={platformsList.find(platform => platform.name === value)?.icon ?? 'link'} />
                {value ?? 'Select a platform'}
            </div>
        )
    }

    console.log(selectedPlatform)

    return (
        <Select.Root  {...props}>
            <Select.Trigger placeholder="Select a platform" width="100%">
                {renderValue(selectedPlatform)}
            </Select.Trigger>
            <Select.Content>
                {platformsList.map((platform, index) => {
                    const isLastItem = index === platformsList.length - 1
                    return (
                        <Select.Option key={platform.id} value={platform.name} separator={!isLastItem}>
                            <Icon name={platform.icon} />
                            {platform.name}
                        </Select.Option>
                    )
                })
                }
            </Select.Content>
        </Select.Root>
    )
}