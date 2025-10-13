import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { CommonModule } from '@angular/common';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Footer],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact implements AfterViewInit {
  form = {
    nombre: '',
    apellidos: '',
    email: '',
    phone: '',
    mensaje: '',
  };

  cargando = false;
  mensajeRespuesta = '';
  iti: any;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    const input = document.querySelector('#phone') as HTMLInputElement;

    if (!input) {
      console.error('⚠️ Input #phone no encontrado en el DOM');
      return;
    }

    this.iti = intlTelInput(input, {
      initialCountry: 'mx',
      separateDialCode: true,
      // 👇 Importante: esta propiedad no está en los tipos, pero funciona en runtime
      utilsScript:
        'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js',
    } as any);

    // Log del país seleccionado
    input.addEventListener('countrychange', () => {
      const country = this.iti.getSelectedCountryData();
      console.log('🌎 País cambiado:', country.iso2, country.dialCode);
    });
  }

  async enviarFormulario(): Promise<void> {
    // Aseguramos que utils.js haya cargado antes de usar getNumber()
    await this.waitForUtils();

    if (this.iti) {
      const intlUtils = (window as any).intlTelInputUtils;
      const phoneNumber = intlUtils
        ? this.iti.getNumber(intlUtils.numberFormat.E164)
        : this.iti.getNumber();

      console.log('📞 Número detectado por intl-tel-input:', phoneNumber);
      this.form.phone = phoneNumber || '';
    }

    console.log('📱 Número final a enviar:', this.form.phone);

    // Validaciones básicas
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) {
      this.mensajeRespuesta = 'Por favor, llena todos los campos requeridos.';
      return;
    }

    if (this.iti && !this.iti.isValidNumber()) {
      this.mensajeRespuesta = 'Por favor, ingresa un número válido.';
      return;
    }

    this.cargando = true;
    this.mensajeRespuesta = '';

    // Envío de datos al backend
    this.http
      .post('http://localhost/send-mail/send-mail.php', this.form)
      .subscribe({
        next: (res: any) => {
          console.log('📨 Respuesta del servidor PHP:', res);
          this.mensajeRespuesta =
            res?.message || 'Mensaje enviado correctamente.';
          this.resetForm();
        },
        error: (err) => {
          console.error('❌ Error al enviar al PHP:', err);
          this.mensajeRespuesta = 'Ocurrió un error al enviar el mensaje.';
          this.cargando = false;
        },
      });
  }

  private waitForUtils(): Promise<void> {
    return new Promise((resolve) => {
      const checkUtils = () => {
        if ((window as any).intlTelInputUtils) {
          resolve();
        } else {
          setTimeout(checkUtils, 100);
        }
      };
      checkUtils();
    });
  }

  private resetForm(): void {
    this.form = {
      nombre: '',
      apellidos: '',
      email: '',
      phone: '',
      mensaje: '',
    };

    const phoneInput = document.querySelector('#phone') as HTMLInputElement;
    if (phoneInput) phoneInput.value = '';
    this.cargando = false;
  }
}
