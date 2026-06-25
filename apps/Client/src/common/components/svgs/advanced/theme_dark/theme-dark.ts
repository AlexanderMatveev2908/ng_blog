

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-theme-dark',
  templateUrl: `./theme-dark.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvThemeDark {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
