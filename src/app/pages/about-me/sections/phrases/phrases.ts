import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-phrases',
  imports: [CommonModule],
  templateUrl: './phrases.html',
  styleUrl: './phrases.css',
})
export class Phrases {
  frases = [
    {
      texto:
        '“El dinero y la fama no son malos, sencillamente en ocasiones revelan el corazón.¡Da gracias por  todo!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“Después de mucho ruido, me atrapo el silencio. ¡Entonces escuche tu Voz!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto:
        '“Si ahora vives en el corazón de Dios, no es porque pagues alguna renta, antes Él, pago un precio.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“Cuando Él, permanece callado a tu oración, no es porque este enojado, mucho menos ocupado. ¡Sólo espera!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: '“El único hilo qué ayuda a cerrar heridas, es el perdón.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“Cuando des a luz una buena idea, exponla al rio, vivirá, crecerá y se desarrollará. ¡Moisés vivió!.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
  ];
}
