import { createFeatureSelector } from '@ngrx/store';
import { ProjectsStateT } from '.';

export const getProjectsState = createFeatureSelector<ProjectsStateT>('projects');

