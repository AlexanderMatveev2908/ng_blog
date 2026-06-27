import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  signal,
  Signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { SvgT } from '@/common/types/general';
import { SvgStrokeBurger } from '@/common/components/svgs/stroke/burger/burger';
import { UseThemeSvc } from '@/core/services/use_theme';
import { SvgStrokeThemeLight } from '@/common/components/svgs/stroke/theme_light/theme-light';
import { SvgAdvThemeDark } from '@/common/components/svgs/advanced/theme_dark/theme-dark';
import { NavbarUiFct } from './ui_fct';
import { RouterLink } from '@angular/router';
import { UseNavSvc } from '@/core/services/use_nav';
import { RefDomT } from '@/common/types/dom';

@Component({
  selector: 'app-navbar',
  imports: [ImgLoading, NgComponentOutlet, NgClass, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  public readonly useTheme: UseThemeSvc = inject(UseThemeSvc);

  private readonly useNav: UseNavSvc = inject(UseNavSvc);

  public readonly isDrop: WritableSignal<boolean> = signal(false);

  public toggleDrop(): void {
    this.isDrop.set(!this.isDrop());
  }

  public readonly SvgBurger: SvgT = SvgStrokeBurger;
  public readonly SvgTheme: Signal<SvgT> = computed(() =>
    this.useTheme.isLight() ? SvgAdvThemeDark : SvgStrokeThemeLight,
  );

  public readonly NavbarUiFct = NavbarUiFct;

  public getFont(path: string) {
    return this.useNav.currPath() === path ? 'txt__7_semibold' : 'txt__7';
  }

  @ViewChild('dropRef')
  public readonly dropRef: RefDomT;

  @ViewChild('burgerRef')
  public readonly burgerRef: RefDomT;

  @HostListener('document:click', ['$event'])
  public onClickOut(event: MouseEvent) {
    const target = event.target as Node;

    const clickedDropdown = this.dropRef?.nativeElement.contains(target);
    const clickedBurger = this.burgerRef?.nativeElement.contains(target);

    if (!clickedBurger && !clickedDropdown) this.isDrop.set(false);
  }
}
