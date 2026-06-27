import { UseThemeSvc } from '@/core/services/use_theme';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FooterUiFct } from './ui_fct';

@Component({
  selector: 'app-footer',
  imports: [NgClass, NgComponentOutlet],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public readonly useTheme: UseThemeSvc = inject(UseThemeSvc);

  public readonly FooterUiFct = FooterUiFct;
}
