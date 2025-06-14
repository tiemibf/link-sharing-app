import { style } from "@vanilla-extract/css";

export const profileDetailsContainer = style({
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 32
});

export const profilePictureContainer = style({
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    background: '#FAFAFA',
    borderRadius: 12,
    padding: 24,
    margin: '32px 0 0 0'
});

export const profilePictureLabel = style({
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 160,
    background: '#F6F6FF',
    borderRadius: 16,
    border: '2px dashed #633CFF',
    color: '#633CFF',
    fontWeight: 500,
    fontSize: 16,
    gap: 12
});

export const profilePictureInput = style({
    display: 'none'
});

export const profilePictureHint = style({
    color: '#737373',
    fontSize: 14,
    maxWidth: 180
});

export const formFieldsContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    marginTop: 32
});

export const formField = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
});

export const uploadIcon = style({
    fontSize: 40,
    marginBottom: 8
});

export const uploadText = style({
    marginBottom: 4,
    color: '#633CFF',
    fontWeight: 500
});

export const footerContainer = style({
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '24px'
}); 