import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrls: ['./videos.css'],
})
export class Videos implements AfterViewInit {
  cortometrajes = [
    {
      titulo: 'La semilla ',
      subtitulo: '"Es Importante el Talento, pero el Fruto es Escencial"',
      url: 'https://youtu.be/EQcjzkoEaPE?si=5MG0eMZIA1v6AsQi&vq=hd1080',
      thumbnail: 'https://img.youtube.com/vi/EQcjzkoEaPE/hqdefault.jpg',
    },
    {
      titulo: 'Barro vivo',
      subtitulo: '"Somos obra de Sus manos"',
      url: 'https://youtu.be/dzJFK3NF9to?si=dcdItMHxG3wPXHST&vq=hd1080',
      thumbnail: 'https://img.youtube.com/vi/dzJFK3NF9to/hqdefault.jpg',
    },
    {
      titulo: 'La Batuta',
      subtitulo: '"Un Toque Especial"',
      url: 'https://youtu.be/iY9Pgv_aXRQ?si=poDRTzm50YliepR3&vq=hd1080',
      thumbnail: 'https://img.youtube.com/vi/iY9Pgv_aXRQ/hqdefault.jpg',
    },
  ];

  ngAfterViewInit(): void {
    GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  }
}
