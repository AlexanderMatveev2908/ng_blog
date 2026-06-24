import { noticeReducer, NoticeStateT } from '@/features/notice/reducer';
import { projectsReducer, ProjectsStateT } from '@/features/projects/reducer';
import { toastReducer, ToastStateT } from '@/features/toast/reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface StoreStateT {
  toast: ToastStateT;
  notice: NoticeStateT;
  projects: ProjectsStateT;
}

export const rootReducer: ActionReducerMap<StoreStateT> = {
  toast: toastReducer,
  notice: noticeReducer,
  projects: projectsReducer,
};
