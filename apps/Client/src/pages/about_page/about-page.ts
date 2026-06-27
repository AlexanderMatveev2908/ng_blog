import { UseThemeSvc } from '@/core/services/use_theme';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AboutUiFct } from './ui_fct';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';

@Component({
  selector: 'app-about-page',
  imports: [NgClass, ImgLoading],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  public readonly useTheme: UseThemeSvc = inject(UseThemeSvc);

  public readonly AboutUiFct = AboutUiFct;
}
