import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-hero-conferencias',
  imports: [RouterLink],
  templateUrl: './hero-conferencias.html',
  styleUrl: './hero-conferencias.css',
})
export class HeroConferencias implements AfterViewInit {
  ngAfterViewInit() {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      autoplayVideos: true,
    });
  }
}
