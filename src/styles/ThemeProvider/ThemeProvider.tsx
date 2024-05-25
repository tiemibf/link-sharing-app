import { PropsWithChildren } from 'react';

import { themeClass } from '../theme.css';

export type ThemeProviderProps = PropsWithChildren<unknown>;

export function ThemeProvider({ children }: ThemeProviderProps) {
    return <div className={themeClass} id='themeProvider'>{children}</div>;
}
