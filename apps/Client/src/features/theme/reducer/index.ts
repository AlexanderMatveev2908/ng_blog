import { createReducer, on } from '@ngrx/store';
import { ThemeActT } from './actions';

export type ThemeT = 'light' | 'dark';

export interface ThemeStateT {
  theme: ThemeT;
}

const initState: ThemeStateT = {
  theme: 'light',
};

export const themeReducer = createReducer(
  initState,
  on(ThemeActT.SET_THEME, (_: ThemeStateT, action: { theme: ThemeT }) => ({ theme: action.theme })),
);
