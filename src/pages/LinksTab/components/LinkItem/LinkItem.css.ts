import { style } from "@vanilla-extract/css";

export const linkItemStyle = style({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px'
})

export const linkItemHeaderStyle = style({
    display: 'flex',
    justifyContent: 'space-between'
})