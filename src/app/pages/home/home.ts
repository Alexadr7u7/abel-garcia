import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Books } from './sections/books/books';
import { Videos } from './sections/videos/videos';
import { HeroTwo } from './sections/hero-two/hero-two';
import { Contact } from '../contact/contact';
import { HeroConferencias } from '../conferencias/sections/hero-conferencias/hero-conferencias';
import { Phrases } from './sections/phrases/phrases';

@Component({
  selector: 'app-home',
  imports: [Hero, Books, Videos, HeroTwo, Contact, HeroConferencias, Phrases],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
