import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})
export class Gallery implements AfterViewInit {
  imagenes: string[] = [];

  ngOnInit() {
    fetch('/assets/organizaciones.json')
      .then((res) => res.json())
      .then((data: string[]) => {
        this.imagenes = data;
      })
      .catch((err) => console.error('Error cargando imágenes:', err));
  }

  ngAfterViewInit(): void {}
}
