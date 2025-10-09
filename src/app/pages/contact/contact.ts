import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact implements AfterViewInit {
  form = {
    nombre: '',
    email: '',
    phone: '',
    mensaje: '',
  };
  cargando = false;
  mensajeRespuesta = '';

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    const input = document.querySelector('#phone') as HTMLInputElement;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: 'mx', // País por defecto
      });

      // Actualizar el valor del input en el modelo
      input.addEventListener('change', () => {
        this.form.phone = iti.getNumber(); // Número completo con código de país
      });

      input.addEventListener('blur', () => {
        this.form.phone = iti.getNumber();
      });
    }
  }

  enviarFormulario() {
    this.cargando = true;
    this.mensajeRespuesta = '';

    // Asegúrate de que la ruta apunte a tu PHP en la carpeta 'php'
    this.http
      .post('http://localhost/send-mail/php/send-mail.php', this.form)
      .subscribe({
        next: (res: any) => {
          this.mensajeRespuesta =
            res?.message || 'Mensaje enviado correctamente.';
          this.form = { nombre: '', email: '', phone: '', mensaje: '' };
          const phoneInput = document.querySelector(
            '#phone'
          ) as HTMLInputElement;
          if (phoneInput) phoneInput.value = '';
          this.cargando = false;
        },
        error: (err) => {
          this.mensajeRespuesta = 'Ocurrió un error al enviar el mensaje.';
          this.cargando = false;
        },
      });
  }
}
