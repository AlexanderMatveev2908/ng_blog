import { createAction, props } from '@ngrx/store';
import { AppTypeT } from '.';
import { ProjectT } from '@/common/types/projects';

export const ProjectsActT = {
  SET_APP_TYPE: createAction('SET_APP_TYPE', props<{ appType: AppTypeT[] }>()),
  SET_PAGE: createAction('SET_PAGE', props<{ page: number }>()),
};
