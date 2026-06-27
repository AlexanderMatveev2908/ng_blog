import { UseKitSliceSvc } from '@/core/services/use_kit_slice';
import { computed, Injectable, Signal } from '@angular/core';
import { getThemeState } from './reducer/selector';
import { ThemeStateT, ThemeT } from './reducer';
import { ThemeActT } from './reducer/actions';

@Injectable({
  providedIn: 'root',
})
export class ThemeSlice extends UseKitSliceSvc {
  public get getThemeState(): Signal<ThemeStateT> {
    return this.store.selectSignal(getThemeState);
  }

  public theme: Signal<ThemeT> = computed(() => this.getThemeState().theme);

  public toggleTheme(): void {
    const objMap = {
      light: 'dark',
      dark: 'light',
    };
    const updated = objMap[this.theme()] as ThemeT;

    this.store.dispatch(ThemeActT.SET_THEME({ theme: updated }));
    this.useStorage.setItem('theme', updated);
  }

  public setTheme(theme: ThemeT) {
    this.store.dispatch(ThemeActT.SET_THEME({ theme }));
  }
}
