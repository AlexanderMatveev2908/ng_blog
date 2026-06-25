import { ThemeSlice } from '@/features/theme/slice';
import { inject, Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UseThemeSvc {
  private readonly themeSlice: ThemeSlice = inject(ThemeSlice);

  public toggle(): void {
    this.themeSlice.toggleTheme();
  }

  public ifLight(valA: string, valB: string) {
    return this.themeSlice.theme() === 'light' ? valA : valB;
  }

  public isLight(): boolean {
    return this.themeSlice.theme() === 'light';
  }
}
