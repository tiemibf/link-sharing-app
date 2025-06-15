import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";

export const previewCard = style({
  width: "45%",
  display: "flex",
  marginTop: "100px",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const linksWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const getLinkButtonStyle = recipe({
  base: {
    border: "none",
    width: "237px",
    height: "44px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    cursor: "pointer",
    ...vars.typography.body.small,
    color: "white",
  },
});

export const platformNameContainer = style({
  display: "flex",
  gap: "8px",
});

export const emptyMockupItem = style({
  width: "237px",
  height: "44px",
  borderRadius: "8px",
  backgroundColor: "#eee",
});
