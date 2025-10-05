import { Component } from '@angular/core';
import { Gallery } from './sections/gallery/gallery';
import { Phrases } from './sections/phrases/phrases';

@Component({
  selector: 'app-about-me',
  imports: [Gallery, Phrases],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
