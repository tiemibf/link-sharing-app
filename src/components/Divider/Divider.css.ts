import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const dividerStyle = style({
  height: 1,
  width: "100%",
  backgroundColor: vars.color.borders,
});
