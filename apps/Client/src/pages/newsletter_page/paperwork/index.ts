import { FormControl, FormGroup } from '@angular/forms';
import z from 'zod';

export class NewsletterFormMng {
  public static readonly schema = z.object({
    email: z.email(),
  });

  public static form() {
    return new FormGroup({
      email: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}

export type NewsletterFormT = z.infer<typeof NewsletterFormMng.schema>;
