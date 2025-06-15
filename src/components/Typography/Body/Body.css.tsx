import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/theme.css";

export const body = recipe({
  base: {
    lineHeight: "150%",
    fontFamily: vars.fontFamily.primary,
    fontWeight: vars.fontWeight.regular,
    margin: 0,
  },
  variants: {
    size: {
      small: { fontSize: "12px" },
      base: { fontSize: vars.spacing.base },
    },
    color: {
      darkGray: { color: vars.color.darkGray },
      gray: { color: vars.color.gray },
      red: { color: vars.color.red },
    },
  },
  defaultVariants: {
    size: "base",
    color: "darkGray",
  },
});
