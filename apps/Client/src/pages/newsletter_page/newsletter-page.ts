import { UseThemeSvc } from '@/core/services/use_theme';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NewsletterFormMng } from './paperwork';
import { UseFormAppDir } from '@/core/directives/use_form_app';
import { ReactiveFormsModule } from '@angular/forms';
import { TxtInput } from '@/common/components/forms/txt_input/txt-input';
import { NewsletterUiFct } from './ui_fct';
import { LibRootForm } from '@/core/lib/forms/root_form';

@Component({
  selector: 'app-newsletter-page',
  imports: [NgClass, ReactiveFormsModule, TxtInput],
  templateUrl: './newsletter-page.html',
  styleUrl: './newsletter-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterPage extends UseFormAppDir implements OnInit {
  public readonly useTheme: UseThemeSvc = inject(UseThemeSvc);

  public readonly schema = NewsletterFormMng.schema;
  public readonly form = NewsletterFormMng.form();

  public readonly NewsletterUiFct = NewsletterUiFct;

  public submit() {
    LibRootForm.handleSubmit({
      form: this.form,
      schema: this.schema,
      onValid: (data) => console.log('success', data),
      onInvalid: (errs) => console.log('error', errs),
    });
  }

  ngOnInit(): void {
    this.setupForm();
  }
}
