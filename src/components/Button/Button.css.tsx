import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";

export const getButtonStyle = recipe({
    base: {
        height: '46px',
        width: '227px',
        padding: '12px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: vars.spacing.medium,
        fontFamily: vars.fontFamily.primary,
        fontSize: vars.spacing.base,
        fontWeight: vars.fontWeight.bold,
    },
    variants: {
        variant:
        {
            primary: {
                backgroundColor: vars.color.purple,
                color: vars.color.white,
                ':hover': {
                    backgroundColor: vars.color.purpleHover
                },
                ':disabled': {
                    backgroundColor: vars.color.lightPurple
                }
            },
            secondary: {
                backgroundColor: vars.color.white,
                color: vars.color.purple,
                border: `1px solid ${vars.color.purple}`,
                ':hover': {
                    backgroundColor: vars.color.lightPurple
                },
                ':disabled': {
                    border: `1px solid ${vars.color.lightPurple}`,
                }
            }
        }
    }
})