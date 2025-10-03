import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Books } from './sections/books/books';
import { Videos } from './sections/videos/videos';
import { Content } from './sections/content/content';
import { HeroTwo } from './sections/hero-two/hero-two';
import { Comments } from './sections/comments/comments';
import { Talleres } from './sections/talleres/talleres';

@Component({
  selector: 'app-home',
  imports: [Hero, Books, Videos, HeroTwo, Talleres, Content],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
