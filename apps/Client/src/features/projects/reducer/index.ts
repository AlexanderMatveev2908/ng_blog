import { createReducer, on } from '@ngrx/store';
import { ProjectsActT } from './actions';

export type AppTypeT = 'full-stack' | 'frontend' | 'backend';

export interface ProjectsStateT {
  appType: AppTypeT[];
  page: number;
}

const initState: ProjectsStateT = {
  appType: ['full-stack', 'frontend', 'backend'],
  page: 0,
};

export const projectsReducer = createReducer(
  initState,
  on(ProjectsActT.SET_APP_TYPE, (_: ProjectsStateT, action: { appType: AppTypeT[] }) => ({
    ..._,
    appType: action.appType,
  })),
  on(ProjectsActT.SET_PAGE, (_: ProjectsStateT, action: { page: number }) => ({
    ..._,
    page: action.page,
  })),
);
