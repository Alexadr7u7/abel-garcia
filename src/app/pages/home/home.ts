import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Books } from './sections/books/books';
import { Videos } from './sections/videos/videos';
import { HeroTwo } from './sections/hero-two/hero-two';
import { Talleres } from './sections/talleres/talleres';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Books, Videos, HeroTwo, Talleres, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
