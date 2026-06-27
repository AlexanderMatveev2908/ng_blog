import { UseThemeSvc } from '@/core/services/use_theme';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [NgClass],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  public readonly useThem: UseThemeSvc = inject(UseThemeSvc);
}
