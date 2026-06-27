import { FormFieldT } from '@/common/types/dom';
import { UseFormFieldDir } from '@/core/directives/use_form_field_dir';
import { UseThemeSvc } from '@/core/services/use_theme';
import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-txt-input',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './txt-input.html',
  styleUrl: './txt-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TxtInput extends UseFormFieldDir implements OnInit {
  public readonly field: InputSignal<FormFieldT> = input.required();

  public readonly useTheme: UseThemeSvc = inject(UseThemeSvc);

  ngOnInit(): void {
    this.setupField();
  }
}
