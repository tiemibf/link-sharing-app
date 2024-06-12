import { style } from "@vanilla-extract/css";

export const emptyStateWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '62px 220px',
    justifyContent: 'center'
})

export const textStyle = style({
    marginTop: '24px',
    textAlign: 'center'
})