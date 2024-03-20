import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/theme.css";

export const body = recipe({
    base: {
        lineHeight: "150%",
        fontFamily: vars.fontFamily.primary,
        fontWeight: vars.fontWeight.regular,
        color: vars.color.darkGray,
    },
    variants: {
        size: {
            small: { fontSize: "12px" },
            base: { fontSize: vars.spacing.base },
        }
    },
    defaultVariants: {
        size: "base",
    }
})