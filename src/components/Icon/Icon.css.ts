import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

globalStyle(".grayIcon > div > svg > path", {
    fill: vars.color.gray,
})

globalStyle(".purpleIcon > div > svg > path", {
    fill: vars.color.purple,
})