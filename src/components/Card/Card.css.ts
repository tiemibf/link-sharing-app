import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";

export const getCardStyles = recipe({
    base: {
        backgroundColor: vars.color.white,
        borderRadius: vars.spacing.medium,
        width: 'auto',
        height: 'auto'
    }
})