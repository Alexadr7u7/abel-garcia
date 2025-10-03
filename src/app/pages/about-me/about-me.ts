import { Component } from '@angular/core';
import { Gallery } from './gallery/gallery';

@Component({
  selector: 'app-about-me',
  imports: [Gallery],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
