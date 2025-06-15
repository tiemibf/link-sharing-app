import { style } from "@vanilla-extract/css";

export const illustrationEmpty = style({
  height: "160px"
});

export const emptyStateWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "60px",
  justifyContent: "center",
});

export const textStyle = style({
  marginTop: "24px",
  textAlign: "center",
  maxWidth: "480px",
});
