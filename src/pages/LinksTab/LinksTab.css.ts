import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const linksTabContainer = style({
  display: "flex",
  gap: "24px",
});

export const linksCard = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  backgroundColor: vars.color.white,
  minHeight: "600px",
  width: "55%",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});

export const linksWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
