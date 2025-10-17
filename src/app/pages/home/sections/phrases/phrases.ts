import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-phrases',
  imports: [CommonModule, Carousel, ButtonModule],
  templateUrl: './phrases.html',
  styleUrl: './phrases.css',
})
export class Phrases {
  @ViewChild('scrollRow1') scrollRow1!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollRow2') scrollRow2!: ElementRef<HTMLDivElement>;
  frases = [
    {
      texto:
        '“Después de mucho ruido, me atrapo el silencio. ¡Entonces escuche tu Voz!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“No pasa nada con qué pie te levantes hoy, lo importante es que te sostengas de Su mano derecha.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto:
        '“Por más que se distancie un hijo de su padre, siempre los unirá la misma sangre. ”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“Las densas tinieblas pueden abundar en las horas más obscuras. ¡Pero nunca señorear!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: '“Mi escondite secreto. ¡La cruz!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: '“La fe tiene pies, ponte sobre de ellos y a caminar.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: '“Todo alrededor de la Vida es minúsculo.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: '“El afán del día, desenfoca la mirada y desvían el corazón. ”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto:
        '“Los sueños, pueden estar un tiempo en la cisterna (enterrados), y en la cárcel (encerrados). ¡Pero no en el panteón! (muertos)”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto:
        '“Antes de decirte; sígueme, Él te siguió al dejar su trono.¡Déjate atrapar! ”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: '“Fuera de Él, no hay bien. ¡Acércate a Él!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“¡No sé qué paso en el edén! Pero si entiendo lo que sucedió en la cruz y en eso descanso.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: '“Sobre tú realidad, declara la Verdad.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: `“Haz un trueque con Él,
      Tú debilidad por su fuerza,
      Tú ansiedad por su paz,
      Tú temor por su amor,
      Tú pesadilla por su sueño.”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: `“Cuando Él, permanece callado a tu oración, no es porque este enojado, mucho menos ocupado. ¡Sólo espera!”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto:
        '“No esperes a que llueva y truene el cielo para planear, Noé lo hizo antes de la primera gota de lluvia.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“Al adversario no hay que darle tiempo, ni espacio, mucho menos lugar. ¡El camino es estrecho!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: `“¡Intimida con la Verdad, para vivir con libertad!”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: `“Que pase el día y que pase la noche, su respuesta vendrá en su tiempo, no en el mío. ¡Todo pasa, pero su Palabra no!”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto:
        '“Puede haber escasez de palabra (revelación), pero no hayescasez de su Espíritu.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“ Una cosa es desarrollar tus dones, y otra desarrollar el fruto de Él.  ¡Lo primero es importante, lo segundo es esencial!”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: `“Doce se sentaron a la mesa con Él, y oyeron sus palabras, pero sólo uno escuchó sus secretos. ¡No hay consentidos, sólo íntimos!”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: `“Sube al lugar más alto, más alto que tus problemas, más alto que tú enfermedad, que tú ansiedad, que todo. ¡Sube a la Roca, más que alta tú!”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: '“El único hilo qué ayuda a cerrar heridas, es el perdón.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: '“La red que atrapa y no se rompe, es el amor.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: `“A los sabios los alumbro una estrella, a los necios nunca les brillo.”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: `“Para ver su Gloria, Moisés tuvo que esconderse en la Roca, ¡Escóndete en Él!”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto:
        '“Nunca cambies tus principios y tu herencia por cosas vanas, aunque el apetito sea feroz.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“Cuando des a luz una buena idea, exponla al rio, vivirá, crecerá y se desarrollará. ¡Moisés vivió!  ”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: `“Donde hay un vacío, siempre existirá un desorden. ”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: `“Si deseas influenciar para bien, ¡Expresa vida!”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: '“Entre más refresques tu fe, más pronto se secará la duda.”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto:
        '“El doctor, para operar necesita que el paciente este bajo anestesia, Dios para operar, necesita que uno este bajo su Espíritu. ”',
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-02.jpeg',
    },
    {
      texto: `“Sin Fe, no hay respuesta. ”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
    {
      texto: `“La fe va en contra de la naturaleza humana, pero bien conectado con la naturaleza de Dios.”`,
      nombre: 'Abel Garcia',
      imagen: '/assets/img/abel/image-03.png',
    },
  ];
  frasesFila1: any[] = [];
  frasesFila2: any[] = [];
  pausedRows = { row1: false, row2: false };
  ngOnInit() {
    const mitad = Math.ceil(this.frases.length / 2);
    this.frasesFila1 = this.frases.slice(0, mitad);
    this.frasesFila2 = this.frases.slice(mitad);
  }
  pauseScroll(row: 'row1' | 'row2') {
    this.pausedRows[row] = true;
    this.getRow(row).style.animationPlayState = 'paused';
  }

  resumeScroll(row: 'row1' | 'row2') {
    if (!this.pausedRows[row]) {
      this.getRow(row).style.animationPlayState = 'running';
    }
  }

  togglePause(row: 'row1' | 'row2') {
    this.pausedRows[row] = !this.pausedRows[row];
    this.getRow(row).style.animationPlayState = this.pausedRows[row]
      ? 'paused'
      : 'running';
  }

  private getRow(row: 'row1' | 'row2') {
    return row === 'row1'
      ? this.scrollRow1.nativeElement
      : this.scrollRow2.nativeElement;
  }
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
