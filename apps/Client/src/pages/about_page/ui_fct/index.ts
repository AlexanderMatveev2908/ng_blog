import { v4 } from 'uuid';

export class AboutUiFct {
  public static readonly data = [
    {
      underlined: 'The Pragmatic Programmer',
      txt: 'by Andrew Hunt and David Thomas (for helpful insights into software development)',
    },
    {
      underlined: 'Ready Player One',
      txt: 'by Ernest Cline (for some futuristic escapism)',
    },
    {
      underlined: 'The Hobbit',
      txt: 'by J.R.R. Tolkien (for a bit of fantasy fun)',
    },
    {
      underlined: 'Educated',
      txt: 'by Tara Westover (for incredible inspiration)',
    },
  ].map((el) => ({ ...el, id: v4() }));
}
