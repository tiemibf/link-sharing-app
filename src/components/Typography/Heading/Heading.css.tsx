import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/theme.css";

export const getHeadingStyle = recipe({
    base: {
        lineHeight: "150%",
        fontFamily: vars.fontFamily.primary,
        fontWeight: vars.fontWeight.bold,
        color: vars.color.darkGray,
        margin: 0
    },
    variants: {
        size: {
            base: { fontSize: vars.spacing.base },
            large: { fontSize: vars.spacing.large },
        }
    },
    defaultVariants: {
        size: "base",
    }
})

export const test = style({ color: vars.color.red })