import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const devLinksLogo = style({
    width: '146px'
})

export const tabsWrapper = style({
    display: 'flex'
})

export const tabContentStyle = style({
    padding: '0 24px'
})

export const appHeader = style({
    margin: '24px',
    padding: vars.spacing.base,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: vars.color.lightGray
})

export const tabItemStyle = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
})