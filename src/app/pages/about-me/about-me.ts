import { Component } from '@angular/core';
import { Gallery } from './sections/gallery/gallery';

@Component({
  selector: 'app-about-me',
  imports: [Gallery],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
