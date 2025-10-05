import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import GLightbox from 'glightbox';
import { Books } from '../home/sections/books/books';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule, RouterLink, Books],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail implements AfterViewInit {
  book: any;
  constructor(private route: ActivatedRoute) {
    const titulo = this.route.snapshot.paramMap.get('titulo');
    this.book = this.books.find((b) => b.titulo === titulo);
  }

  books = [
    {
      titulo: 'Entrenamiento',
      autor: 'Abel Garcia',
      imagen: '/assets/img/entrenamiento.jpg',
      description:
        'La Palabra nos enseña a ser diligentes. Esto se aprende cuando conocemos los principios que Dios nos ha brindado en Su Palabra, para abrazar sabiduría, inteligencia y lograr ser creativos, estratégicos y asertivos. Así podemos caminar la segunda milla con quienes necesitan ser escuchados, trayendo libertad a los oprimidos y ayudando a quienes aún no han encontrado la libertad que da Cristo.',
      alt: 'Libro 4',
      video: '/assets/videos/entrenamiento.mp4',
      thumbnail: '/assets/videos/entrenamiento.png',
    },
    {
      titulo: 'Admirados por sus enseñanzas',
      autor: 'Abel Garcia',
      imagen: '/assets/img/admirados.png',
      description:
        'Cuando llegamos a Jesús, traemos muchas preguntas en nuestra mente. Sólo en Cristo, al abrazar Su Palabra, lograremos tener Sus pensamientos, que son de bien, de paz y mucho más grandes que los nuestros. Esto provocará que toda interrogante se anule y, con Sus respuestas, quedemos admirados por Sus enseñanzas, para que nuestro propósito en Cristo se cumpla: ¡de signos de interrogación a signos de admiración!',
      alt: 'Libro 5',
    },
    {
      titulo: 'Generación M',
      autor: 'Abel Garcia',
      imagen: '/assets/img/generacion.png',
      alt: 'Libro 6',
      description:
        'Cada generación va y viene, y la tierra permanece con un propósito específico: voltear su mirada a lo alto, su corazón a su Creador. Esta necesidad latente sólo la iglesia de Cristo puede atenderla al ser movida a misericordia, como lo hizo el Samaritano y muchos personajes más de las Escrituras. Se necesita una generación entendida conforme a la voluntad de Dios, una generación de misioneros.',
    },
    {
      titulo: 'da -VID',
      autor: 'Abel Garcia',
      imagen: '/assets/img/da-vid.png',
      description:
        'Somos formados con diferentes talentos y dones, otorgados por el Padre de las luces, el Autor y Dador de vida. Somos llamados a dar, a ser generosos, como la iglesia de los Filipenses, una iglesia entendida en la extensión del evangelio.',
      alt: 'Libro 7',
    },
    {
      titulo: 'Los Dones para edificación',
      autor: 'Abel Garcia',
      imagen: '/assets/img/edificacion.jpg',
      description:
        'Dios nos ha dado dones para servir y brindar el amor de Dios. De esta manera crecemos en esa armonía del Espíritu Santo, sirviendo con amor.',
      alt: 'Libro 8',
    },
    {
      titulo: 'Fruto Agradable',
      autor: 'Abel Garcia',
      imagen: '/assets/img/fruto-agradable.png',
      description:
        'Dios da su Espíritu sin medida, para brindar el fruto que sólo en Él podemos dar. Creciendo en su verdad y libertad, presentamos a Cristo al mundo.',
      alt: 'Libro 9',
    },
    {
      titulo: 'Liderazgo y Servicio',
      autor: 'Abel Garcia',
      imagen: '/assets/img/liderazgo-servicio.png',
      description:
        'Por medio de las Escrituras, aprenderemos que Jesús, siendo Hijo de Dios, se hizo hombre y, por medio del servicio, nos enseña a crecer para ser luz en este mundo, a ser cabeza y no cola, a ser buenos administradores y desarrollar nuestro liderazgo. Somos árboles de justicia; sólo hay que dejar que crezca Él en nosotros para dar fruto.',
      alt: 'Libro',
    },
    {
      titulo: 'Alcance y Seguimiento',
      autor: 'Abel Garcia',
      imagen: '/assets/img/alcance-seguimiento.png',
      description:
        'Somos llamados a hacer discípulos, a seguir los pasos del Maestro. Más allá de entretener, tenemos la responsabilidad de extender el reino, llevando a cabo la gran comisión, participando en la gran cosecha y siendo los obreros que se necesitan para la mies, con la compañía del Espíritu Santo para hacer misiones.',
      alt: 'Libro 1',
    },
    {
      titulo: 'La Gran Comisión',
      autor: 'Abel Garcia',
      imagen: '/assets/img/link-time.png',
      description:
        'En los Hechos, aprenderemos un común denominador: la oración, la herramienta que necesitamos en el día a día para hacer el enlace (link) entre el cielo y la tierra, entender los tiempos (time), compartir las buenas nuevas de Jesús y asociarnos con la mente de Cristo para emprender el evangelismo y discipulado, extendiendo el reino de Dios.',
      alt: 'Libro 2',
    },
    {
      titulo: 'Evangelismo y Misiones',
      autor: 'Abel Garcia',
      imagen: '/assets/img/evangelismo-misiones.png',
      description:
        'Con la Palabra de Dios vamos a conocer lo importante que es ejercer el evangelismo cumpliendo con la gran comisión. Esto es por medio de nuestras vidas, al entender que somos cartas abiertas donde Dios escribe en nosotros la historia de Jesús, al permitir que Él crezca y uno mengüe. Todos tenemos una historia para compartir nuestra fe, así como se menciona en los evangelios.',
      alt: 'Libro 3',
    },
  ];

  ngAfterViewInit(): void {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  }
}
