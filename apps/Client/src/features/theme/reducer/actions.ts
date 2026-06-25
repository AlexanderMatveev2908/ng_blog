import { createAction, props } from '@ngrx/store';
import { ThemeT } from '.';

export const ThemeActT = {
  SET_THEME: createAction('SET_THEME', props<{ theme: ThemeT }>()),
};
