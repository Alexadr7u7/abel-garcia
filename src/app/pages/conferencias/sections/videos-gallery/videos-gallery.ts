import { AfterViewInit, Component } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-videos-gallery',
  imports: [],
  templateUrl: './videos-gallery.html',
  styleUrl: './videos-gallery.css',
})
export class VideosGallery implements AfterViewInit {
  ngAfterViewInit() {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      autoplayVideos: true,
    });
  }
}
