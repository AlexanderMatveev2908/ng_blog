import { UseThemeSvc } from '@/core/services/use_theme';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomepageUiFct } from './ui_fct';

@Component({
  selector: 'app-home-page',
  imports: [NgClass, NgComponentOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  public readonly useThem: UseThemeSvc = inject(UseThemeSvc);

  public readonly HomepageUiFct = HomepageUiFct;
}
