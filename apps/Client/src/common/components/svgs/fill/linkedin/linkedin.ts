
import { Nullable } from '@/common/types/general';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-fill-linkedin',
  templateUrl: `./linkedin.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgFillLinkedin {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
    fill: InputSignal<string> = input<string>('currentColor');
    stroke: InputSignal<Nullable<string>> = input<Nullable<string>>(null);
    
}
