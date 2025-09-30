import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { ScrollTop } from './layout/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'abelgarcia.org';
}
