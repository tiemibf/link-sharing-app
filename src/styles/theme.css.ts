import { createTheme, globalStyle } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
    color: {
        lightPurple: '#efebff',
        purpleHover: '#beadff',
        purple: '#633cff',
        lightGray: '#fafafa',
        borders: '#d9d9d9',
        gray: '#737373',
        darkGray: '#333333',
        white: '#ffffff',
        red: '#ff3939'
    },
    spacing: {
        small: '4px',
        medium: '8px',
        base: '16px',
        large: '32px',
        xlarge: '48px'
    },
    fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
    },
    fontFamily: {
        primary: 'Instrument Sans, sans-serif'
    },
    typography: {
        body: {
            medium: {
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '16px',
                lineHeight: "150%",
                fontWeight: '400',
                color: '#333333',
            },
            small: {
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '12px',
                lineHeight: "150%",
                fontWeight: '400',
                color: '#333333',
            },
        },
        heading: {
            medium: {
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '32px',
                lineHeight: "150%",
                fontWeight: '700',
                color: '#333333',
            },
            small: {
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '16px',
                lineHeight: "150%",
                fontWeight: '700',
                color: '#333333',
            }
        }
    }
});

globalStyle('body', {
    margin: 0,
    backgroundColor: vars.color.lightGray,
})