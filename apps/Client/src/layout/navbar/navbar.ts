import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { SvgT } from '@/common/types/general';
import { SvgStrokeBurger } from '@/common/components/svgs/stroke/burger/burger';
import { UseThemeSvc } from '@/core/services/use_theme';
import { SvgStrokeThemeLight } from '@/common/components/svgs/stroke/theme_light/theme-light';
import { SvgAdvThemeDark } from '@/common/components/svgs/advanced/theme_dark/theme-dark';

@Component({
  selector: 'app-navbar',
  imports: [ImgLoading, NgComponentOutlet, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  public readonly useTheme: UseThemeSvc = inject(UseThemeSvc);

  public readonly SvgBurger: SvgT = SvgStrokeBurger;
  public readonly SvgTheme: Signal<SvgT> = computed(() =>
    this.useTheme.isLight() ? SvgAdvThemeDark : SvgStrokeThemeLight,
  );
}
