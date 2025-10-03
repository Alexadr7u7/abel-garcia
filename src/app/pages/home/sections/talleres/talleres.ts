import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talleres',
  imports: [Carousel, ButtonModule, RouterLink],
  templateUrl: './talleres.html',
  styleUrl: './talleres.css',
})
export class Talleres {
  @ViewChild(Carousel) carousel!: Carousel;
  constructor() {
    Carousel.prototype.onTouchMove = () => {};
  }
  prev() {
    this.carousel.navBackward(new MouseEvent('click'));
  }

  news = [
    {
      title: 'Lorem ipsum.',
      image: '/assets/img/talleres/image.png',
    },
    {
      title: 'Dolor sit amet.',
      image: '/assets/img/talleres/image-1.png',
    },
    {
      title: 'Consectetur.',
      image: '/assets/img/talleres/image-2.png',
    },
    {
      title: 'Adipiscing elit.',
      image: '/assets/img/talleres/image-3.png',
    },
    {
      title: 'Sed do.',
      image: '/assets/img/talleres/image-4.png',
    },
    {
      title: 'Eiusmod tempor.',
      image: '/assets/img/talleres/image-5.png',
    },
    {
      title: 'Incididunt ut.',
      image: '/assets/img/talleres/image-6.png',
    },
    {
      title: 'Labore et.',
      image: '/assets/img/talleres/image-7.png',
    },
    {
      title: 'Dolore magna.',
      image: '/assets/img/talleres/image-8.png',
    },
    {
      title: 'Aliqua enim.',
      image: '/assets/img/talleres/image-9.png',
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3.5,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2.5,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1.5,
      numScroll: 1,
    },
  ];
  next() {
    this.carousel.navForward(new MouseEvent('click'));
  }
}
