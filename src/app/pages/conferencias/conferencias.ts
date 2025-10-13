import { Component } from '@angular/core';
import { HeroConferencias } from './sections/hero-conferencias/hero-conferencias';
import { Gallery } from './sections/gallery/gallery';
import { VideosGallery } from './sections/videos-gallery/videos-gallery';
import { Contact } from '../contact/contact';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-conferencias',
  imports: [HeroConferencias, Gallery, VideosGallery, Contact, Footer],
  templateUrl: './conferencias.html',
  styleUrl: './conferencias.css',
})
export class Conferencias {}
