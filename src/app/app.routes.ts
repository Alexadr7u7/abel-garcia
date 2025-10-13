import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookDetail } from './pages/book-detail/book-detail';
import { AboutMe } from './pages/about-me/about-me';
import { Contact } from './pages/contact/contact';
import { Conferencias } from './pages/conferencias/conferencias';

export const routes: Routes = [
  { path: '', component: Home, data: { animation: 'HomePage' } },
  {
    path: 'book/:titulo',
    component: BookDetail,
    data: { animation: 'BookPage' },
  },
  { path: 'about-me', component: AboutMe, data: { animation: 'AboutPage' } },
  {
    path: 'conferencias',
    component: Conferencias,
    data: { animation: 'ConferenciasPage' },
  },
  { path: 'contacto', component: Contact, data: { animation: 'ContactPage' } },
];
