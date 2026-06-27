import { v4 } from 'uuid';

export class NavbarUiFct {
  public static readonly links = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Newsletter',
      path: '/newsletter',
    },
  ].map((el) => ({
    ...el,
    id: v4(),
  }));
}
