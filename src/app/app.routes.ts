import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookDetail } from './pages/book-detail/book-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'book/:titulo', component: BookDetail },
];
