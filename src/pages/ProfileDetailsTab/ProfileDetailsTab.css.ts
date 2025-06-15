import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const profileDetailsContainer = style({
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 32
});

export const pictureUploadCard = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    background: vars.color.lightGray,
    borderRadius: 12,
    padding: 24,
    margin: '32px 0 0 0',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }
});

export const formField = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }
});

export const inputFieldsCard = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    background: vars.color.lightGray,
    borderRadius: 12,
    padding: 24,
});

export const footerContainer = style({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '24px',
    padding: '0 24px 24px'
});

export const saveButtonContainer = style({
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '24px'
}); 