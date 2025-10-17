import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { ScrollTop } from './layout/scroll-top/scroll-top';
import { routeAnimations } from './router-animations';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css',

  animations: [routeAnimations],
})
export class App {
  protected title = 'abelgarcia.org';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  ngAfterViewInit(): void {
    AOS.init({
      duration: 500,
    });

    // En caso de que ya esté inicializado y regreses a la ruta
    AOS.refreshHard(); // fuerza la relectura del DOM para animaciones
  }
}
