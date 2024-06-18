import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const textButtonStyle = style({
  border: "none",
  background: "none",
  cursor: "pointer",
});

export const textStyle = style({
  ":hover": { color: vars.color.purple },
  ":active": { color: vars.color.purpleHover },
});
