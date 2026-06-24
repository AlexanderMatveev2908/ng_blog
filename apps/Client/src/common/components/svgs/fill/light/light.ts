
import { Nullable } from '@/common/types/general';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-fill-light',
  templateUrl: `./light.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgFillLight {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
    fill: InputSignal<string> = input<string>('currentColor');
    stroke: InputSignal<Nullable<string>> = input<Nullable<string>>(null);
    
}
