import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
    position: "relative",
});

export const svgContainer = style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "308px",
    maxHeight: "610px",
});

export const contentContainer = style({
    paddingTop: "64px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: "56px",
});

export const profileContainer = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export const avatar = style({
    borderRadius: "50%",
    height: "96px",
    width: "96px",
    backgroundColor: "#eee",
    marginBottom: "24px",
});

export const avatarImage = style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    border: `4px solid ${vars.color.lightPurple}`,
});

export const name = style({
    width: "160px",
    height: "25px",
    borderRadius: "8px",
    marginBottom: "12px",
    color: "#333",
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

export const namePlaceholder = style({
    backgroundColor: "#eee",
});

export const email = style({
    width: "160px",
    borderRadius: "8px",
    color: "#333",
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

export const emailPlaceholder = style({
    height: "12px",
    backgroundColor: "#eee",
});

export const emailWithContent = style({
    height: "21px",
}); 