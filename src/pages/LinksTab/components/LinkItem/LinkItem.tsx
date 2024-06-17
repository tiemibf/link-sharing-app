import { Controller, useFormContext } from "react-hook-form"
import { IconLink } from "../../../../assets"
import { Card } from "../../../../components/Card"
import { Input } from "../../../../components/Input"
import { TextButton } from "../../../../components/TextButton"
import { Typography } from "../../../../components/Typography"
import { vars } from "../../../../styles/theme.css"
import { PlatformListSelect } from "../PlatformListSelect"
import { linkItemHeaderStyle, linkItemStyle } from "./LinkItem.css"

interface LinkItemProps {
    index: number;
    removeItem: (index: number) => void;
}

export const LinkItem = ({ index, removeItem }: LinkItemProps) => {
    const { register, watch, control } = useFormContext()
    const itemOrder = index + 1;

    return (
        <Card className={linkItemStyle} backgroundColor={vars.color.lightGray}>
            <div className={linkItemHeaderStyle}>
                <Typography.Body size="base">Link #{itemOrder}</Typography.Body>
                <TextButton size='base' onClick={() => removeItem(index)}>
                    Remove
                </TextButton>
            </div>
            <div>
                <Typography.Body size="small">Platform</Typography.Body>
                <Controller
                    control={control}
                    name={`links.${index}.platformName`}
                    render={({ field }) => {
                        const { ref, ...fieldProps } = field;
                        return (
                            <PlatformListSelect onValueChange={field.onChange} {...fieldProps} />)
                    }}
                />
            </div>

            <div>
                <Typography.Body size="small">Link</Typography.Body>
                <Input icon={IconLink} value={watch(`links.${index}.platformUrl`)} placeholder='e.g. https://www.github.com/johnappleseed' {...register(`links.${index}.platformUrl`)} />
            </div>
        </Card>
    )
}