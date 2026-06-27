import { UseThemeSvc } from '@/core/services/use_theme';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomepageUiFct } from './ui_fct';
import { BlogsUiFct } from '@/features/blogs/ui_fct';
import { FormatterLib } from '@/core/lib/data_structure/formatter';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [NgClass, NgComponentOutlet, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  public readonly useThem: UseThemeSvc = inject(UseThemeSvc);

  public readonly HomepageUiFct = HomepageUiFct;
  public readonly BlogsUiFct = BlogsUiFct;

  public formatDate(date: string) {
    return FormatterLib.formatDate(date);
  }
}
