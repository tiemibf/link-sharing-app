import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const tabItem = style({
    width: '130px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: vars.spacing.medium,
    padding: vars.spacing.medium,
    color: vars.color.gray,
    fontWeight: vars.fontWeight.semibold,
    fontFamily: vars.fontFamily.primary,
    fontSize: vars.spacing.base,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    selectors: {
        '&:svg': {
            fill: vars.color.purple
        },
        '&[data-state="active"]': {
            backgroundColor: vars.color.lightPurple,
            color: vars.color.purple,
        },
        '&:hover': {
            color: vars.color.purple,
        }
    }
})

export const tabList = style({ display: 'flex' })