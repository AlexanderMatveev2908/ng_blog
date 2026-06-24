import { UseKitSliceSvc } from '@/core/services/use_kit_slice';
import { Injectable, Signal, computed } from '@angular/core';
import { getProjectsState } from './reducer/selector';
import { AppTypeT, ProjectsStateT } from './reducer';
import { ProjectT } from '@/common/types/projects';
import { ProjectsActT } from './reducer/actions';

@Injectable({
  providedIn: 'root',
})
export class ProjectsSlice extends UseKitSliceSvc {
  public get getProjectsState(): Signal<ProjectsStateT> {
    return this.store.selectSignal(getProjectsState);
  }

  public page: Signal<number> = computed(() => this.getProjectsState().page);
  public appType: Signal<AppTypeT[]> = computed(() => this.getProjectsState().appType);

  public setAppType(appType: AppTypeT): void {
    let updated: AppTypeT[];
    if (this.appType().includes(appType)) {
      updated = this.appType().filter((el) => el !== appType);
    } else {
      updated = [...this.appType(), appType];
    }

    this.store.dispatch(ProjectsActT.SET_APP_TYPE({ appType: updated }));
  }

  public setPage(page: number): void {
    this.store.dispatch(ProjectsActT.SET_PAGE({ page }));
  }
}
