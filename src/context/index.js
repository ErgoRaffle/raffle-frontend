import { createContext } from "react";

export const LIGHT_THEME = 'LIGHT_THEME';
export const DARK_THEME = 'DARK_THEME';

const ThemeContext = createContext(LIGHT_THEME);

export default ThemeContext;