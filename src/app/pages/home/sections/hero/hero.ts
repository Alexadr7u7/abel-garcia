import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  libros = [
    { src: '/assets/img/abel.png', alt: 'photo' },
    { src: '/assets/img/liderazgo-servicio.png', alt: 'Libro' },
    { src: '/assets/img/alcance-seguimiento.png', alt: 'Libro 1' },
    { src: '/assets/img/link-time.png', alt: 'Libro 2' },
    { src: '/assets/img/evangelismo-misiones.png', alt: 'Libro 3' },
    { src: '/assets/img/entrenamiento.png', alt: 'Libro 4' },
    { src: '/assets/img/admirados.png', alt: 'Libro 5' },
    { src: '/assets/img/generacion.png', alt: 'Libro 6' },
    { src: '/assets/img/da-vid.png', alt: 'Libro 7' },
    { src: '/assets/img/edificacion.png', alt: 'Libro 8' },
    { src: '/assets/img/fruto-agradable.png', alt: 'Libro 9' },
  ];
}
