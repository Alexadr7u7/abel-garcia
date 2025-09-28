import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Books } from './sections/books/books';
import { Videos } from './sections/videos/videos';
import { Content } from './sections/content/content';
import { HeroTwo } from './sections/hero-two/hero-two';

@Component({
  selector: 'app-home',
  imports: [Hero, Books, Videos, Content, HeroTwo],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
