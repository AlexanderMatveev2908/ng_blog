import { noticeReducer, NoticeStateT } from '@/features/notice/reducer';
import { themeReducer, ThemeStateT } from '@/features/theme/reducer';
import { toastReducer, ToastStateT } from '@/features/toast/reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface StoreStateT {
  toast: ToastStateT;
  notice: NoticeStateT;
  theme: ThemeStateT;
}

export const rootReducer: ActionReducerMap<StoreStateT> = {
  toast: toastReducer,
  notice: noticeReducer,
  theme: themeReducer,
};
