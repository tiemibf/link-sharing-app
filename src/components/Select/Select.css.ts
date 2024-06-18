import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const selectTriggerStyle = style({
  height: vars.spacing.xlarge,
  backgroundColor: vars.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `0 ${vars.spacing.base}`,
  border: `2px solid ${vars.color.borders}`,
  borderRadius: vars.spacing.medium,
  cursor: "pointer",
  ":hover": {
    borderColor: vars.color.purple,
  },
  ":focus-visible": {
    outline: "none",
  },
  selectors: {
    '&[data-state="open"]': {
      borderColor: vars.color.purple,
    },
  },
  ...vars.typography.body.medium,
});

globalStyle(`${selectTriggerStyle}[data-state="open"] > span:nth-of-type(2)`, {
  transform: "rotate(180deg)",
  animationDuration: "10s",
});

export const selectContentStyle = style({
  width: "var(--radix-select-trigger-width)",
  border: `2px solid ${vars.color.borders}`,
  borderRadius: vars.spacing.medium,
  marginTop: vars.spacing.medium,
  padding: `0 ${vars.spacing.base}`,
  backgroundColor: vars.color.white,
  maxHeight: "296px",
});

export const selectOptionStyle = style({
  width: "100%",
  padding: "12px 0",
  outline: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  alignContent: "center",
  gap: vars.spacing.medium,
  ...vars.typography.body.medium,
  ":hover": {
    color: vars.color.purple,
  },
  selectors: {
    '&[data-state="checked"]': {
      color: vars.color.purple,
    },
  },
});

globalStyle(`${selectOptionStyle}:hover > div > svg > path`, {
  fill: vars.color.purple,
});

export const selectSeparatorStyle = style({
  backgroundColor: vars.color.borders,
  width: "100%",
  height: "1px",
});
