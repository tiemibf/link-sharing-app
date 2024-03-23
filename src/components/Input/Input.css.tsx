import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const inputWrapper = style({
    display: "flex",
    alignItems: "center",
    border: `2px solid ${vars.color.borders}`,
    borderRadius: vars.spacing.medium,
    padding: `0 ${vars.spacing.base}`,
    ":focus-within": {
        borderColor: vars.color.purple
    },
    selectors: {
        "&[data-invalid=true]": {
            borderColor: vars.color.red
        }
    }
})

export const input = style({
    width: "100%",
    height: vars.spacing.xlarge,
    padding: "0",
    border: 'none',
    caretColor: vars.color.purple,
    ":focus": {
        outline: 'none'
    },
    "::placeholder": { color: vars.color.gray },
    selectors: {
        [`${inputWrapper}[data-invalid=true] &::placeholder`]: {
            color: vars.color.red
        }
    },
    ...vars.typography.body.medium
})

export const inputIcon = style({
    marginRight: '12px'
})

export const error = style({
    ...vars.typography.body.small,
    color: vars.color.red,
    display: 'flex',
    textWrap: 'nowrap'
})