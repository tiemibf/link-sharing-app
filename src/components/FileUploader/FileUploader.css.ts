import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
});

export const dropzone = style({
    width: '193px',
    height: '193px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    cursor: 'pointer',
    position: 'relative',
    fontFamily: vars.fontFamily.primary,
    background: vars.color.lightPurple,
    boxSizing: 'border-box',
    border: '2px solid transparent'
});

export const dropzoneActive = style({
    background: vars.color.purpleHover,
    border: `2px dashed ${vars.color.purple}`
});

export const previewImage = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '12px'
});

export const overlay = style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    borderRadius: '12px'
});

export const uploadIcon = style({
    fontSize: '40px',
    color: vars.color.purple
});

export const uploadIconWhite = style({
    fontSize: '40px',
    color: vars.color.white
});

export const uploadText = style({
    color: vars.color.purple,
    fontWeight: 500
});

export const uploadTextWhite = style({
    color: vars.color.white,
    fontWeight: 500
}); 