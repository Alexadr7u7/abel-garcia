import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookDetail } from './pages/book-detail/book-detail';
import { AboutMe } from './pages/about-me/about-me';
import { TalleresGallery } from './pages/talleres-gallery/talleres-gallery';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'book/:titulo', component: BookDetail },
  { path: 'about-me', component: AboutMe },
  { path: 'conferencias', component: TalleresGallery },
];
