import { FormatterLib } from '@/core/lib/data_structure/formatter';
import { UseThemeSvc } from '@/core/services/use_theme';
import { BlogsUiFct } from '@/features/blogs/ui_fct';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  imports: [NgClass],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
  public readonly useTheme: UseThemeSvc = inject(UseThemeSvc);

  public readonly BlogsUiFct = BlogsUiFct;

  public formatDate(date: string) {
    return FormatterLib.formatDate(date);
  }
}
