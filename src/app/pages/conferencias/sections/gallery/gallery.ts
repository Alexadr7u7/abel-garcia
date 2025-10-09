import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
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
    fetch('/assets/talleres.json')
      .then((res) => res.json())
      .then((data: string[]) => {
        this.imagenes = data;

        // Esperamos un pequeño delay para que Angular pinte el DOM
        setTimeout(() => {
          GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
          });
        }, 300);
      })
      .catch((err) => console.error('Error cargando imágenes:', err));
  }

  ngAfterViewInit() {}
}
