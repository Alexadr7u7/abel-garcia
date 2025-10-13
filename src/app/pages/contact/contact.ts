import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { CommonModule } from '@angular/common';
import { Footer } from '../../layout/footer/footer';
declare var intlTelInputUtils: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Footer],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact implements AfterViewInit {
  @ViewChild('phoneInput') phoneInput!: ElementRef;

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

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (!this.phoneInput) return;

    // Inicializar intl-tel-input
    this.iti = intlTelInput(this.phoneInput.nativeElement, {
      initialCountry: 'mx',
      separateDialCode: true,
      //@ts-ignore
      utilsScript: '/assets/js/utils.js',
    });

    const updateNumber = () => {
      let number = '';
      try {
        // Obtener número completo E.164
        number = this.iti.getNumber() || '';
        // Si está vacío, concatenar el dial code con el valor del input
        if (!number) {
          const dialCode = this.iti.getSelectedCountryData().dialCode;
          const inputVal = this.phoneInput.nativeElement.value.trim();
          if (inputVal) number = `+${dialCode}${inputVal}`;
        }
      } catch (err) {
        console.warn('Error obteniendo número intl-tel-input:', err);
      }
      console.log('📱 Número actualizado:', number);
      this.ngZone.run(() => {
        this.form.phone = number;
      });
    };

    this.phoneInput.nativeElement.addEventListener('input', updateNumber);
    this.phoneInput.nativeElement.addEventListener(
      'countrychange',
      updateNumber
    );
  }

  enviarFormulario(): void {
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) {
      this.mensajeRespuesta = 'Por favor, llena todos los campos requeridos.';
      return;
    }

    if (this.iti) {
      try {
        // Obtener número completo o concatenar dial code + input
        let number = this.iti.getNumber();
        if (!number) {
          const dialCode = this.iti.getSelectedCountryData().dialCode;
          const inputVal = this.phoneInput.nativeElement.value.trim();
          if (inputVal) number = `+${dialCode}${inputVal}`;
        }
        this.form.phone = number;
      } catch (err) {
        console.warn('Error obteniendo número antes de enviar:', err);
        this.form.phone = '';
      }
    }

    console.log('💾 Form data final:', this.form);
    console.log('💾 Form data a enviar:', JSON.stringify(this.form));

    this.cargando = true;
    this.mensajeRespuesta = '';

    this.http
      .post('https://abel-garcia.org/send-mail/send-mail.php', this.form, {
        headers: { 'Content-Type': 'application/json' },
      })
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

  private resetForm(): void {
    this.form = {
      nombre: '',
      apellidos: '',
      email: '',
      phone: '',
      mensaje: '',
    };
    if (this.phoneInput) this.phoneInput.nativeElement.value = '';
    this.cargando = false;
  }
}
