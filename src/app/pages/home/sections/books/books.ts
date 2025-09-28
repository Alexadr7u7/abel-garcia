import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-books',
  imports: [CommonModule, Carousel, ButtonModule, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  @ViewChild(Carousel) carousel!: Carousel;
  constructor() {
    Carousel.prototype.onTouchMove = () => {};
  }
  books = [
    {
      titulo: 'Entrenamiento',
      autor: 'Abel Garcia',
      imagen: '/assets/img/entrenamiento.png',
      alt: 'Libro 4',
    },
    {
      titulo: 'Admirados por sus enseñanzas',
      autor: 'Abel Garcia',
      imagen: '/assets/img/admirados.png',
      alt: 'Libro 5',
    },
    {
      titulo: 'Generación M',
      autor: 'Abel Garcia',
      imagen: '/assets/img/generacion.png',
      alt: 'Libro 6',
    },
    {
      titulo: 'da -VID',
      autor: 'Abel Garcia',
      imagen: '/assets/img/da-vid.png',
      alt: 'Libro 7',
    },
    {
      titulo: 'Los Dones para edificación',
      autor: 'Abel Garcia',
      imagen: '/assets/img/edificacion.jpg',
      alt: 'Libro 8',
    },
    {
      titulo: 'Fruto Agradable',
      autor: 'Abel Garcia',
      imagen: '/assets/img/fruto-agradable.png',
      alt: 'Libro 9',
    },

    {
      titulo: 'Liderazgo y Servicio',
      autor: 'Abel Garcia',
      imagen: '/assets/img/liderazgo-servicio.png',
      alt: 'Libro',
    },
    {
      titulo: 'Alcance y Seguimiento',
      autor: 'Abel Garcia',
      imagen: '/assets/img/alcance-seguimiento.png',
      alt: 'Libro 1',
    },
    {
      titulo: 'La Gran Comisión',
      autor: 'Abel Garcia',
      imagen: '/assets/img/link-time.png',
      alt: 'Libro 2',
    },
    {
      titulo: 'Evangelismo y Misiones',
      autor: 'Abel Garcia',
      imagen: '/assets/img/evangelismo-misiones.png',
      alt: 'Libro 3',
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2.5,
      numScroll: 1,
    },
  ];
  prev() {
    this.carousel.navBackward(new MouseEvent('click'));
  }

  next() {
    this.carousel.navForward(new MouseEvent('click'));
  }
}
