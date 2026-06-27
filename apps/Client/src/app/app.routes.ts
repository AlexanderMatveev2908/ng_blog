import { AboutPage } from '@/pages/about_page/about-page';
import { BlogPage } from '@/pages/blog_page/blog-page';
import { HomePage } from '@/pages/home_page/home-page';
import { NotFoundPage } from '@/pages/not_found_page/not-found-page';
import { NoticePage } from '@/pages/notice_page/notice-page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'blog',
    component: BlogPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'notice',
    component: NoticePage,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
