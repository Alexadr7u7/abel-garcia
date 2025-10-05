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
    fetch('/assets/amistades.json')
      .then((res) => res.json())
      .then((data: string[]) => {
        this.imagenes = data;

        // Esperamos un tick para que Angular renderice el *ngFor
        setTimeout(() => {
          GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
          });
        }, 0);
      })
      .catch((err) => console.error('Error cargando imágenes:', err));
  }

  ngAfterViewInit(): void {
    // Aquí no inicializamos nada, porque las imágenes aún no están cargadas
  }
}
