import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const card = style({
    backgroundColor: vars.color.white,
    borderRadius: vars.spacing.medium,
    width: 'auto',
    height: 'auto'
})