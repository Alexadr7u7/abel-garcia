import { Component } from '@angular/core';
import { HeroConferencias } from './sections/hero-conferencias/hero-conferencias';
import { Gallery } from './sections/gallery/gallery';
import { VideosGallery } from './sections/videos-gallery/videos-gallery';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-conferencias',
  imports: [HeroConferencias, Gallery, VideosGallery, Contact],
  templateUrl: './conferencias.html',
  styleUrl: './conferencias.css',
})
export class Conferencias {}
