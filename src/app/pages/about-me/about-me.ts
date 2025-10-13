import { Component } from '@angular/core';
import { Gallery } from './sections/gallery/gallery';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-about-me',
  imports: [Gallery, Footer],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
