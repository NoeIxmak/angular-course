import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/model/mensaje.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css']
})
export class PersonaAltaComponent implements OnInit {
  formularioCaptura: FormGroup;

  constructor(private formBuilder: FormBuilder, private eventosService: EventosService) {

    this.formularioCaptura = formBuilder.group({
      'nombre': ['', Validators.required],
      'apellidoPaterno': ['', Validators.required],
      'apellidoMaterno': ['', Validators.required],
      'edad': ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }

  btnGuardarClick() {
    debugger;
    console.log('error', this.formularioCaptura);
    let mensaje = new Mensaje();
    if (!this.formularioCaptura.valid) {

      mensaje.mensaje = "Error en la captura";
      mensaje.tipo = "error";
      this.eventosService.mostrarMensaje.next(mensaje);
      this.formularioCaptura.markAllAsTouched();

      if (this.formularioCaptura.get("edad")?.value <= 17) {
        mensaje.mensaje = "Error en la captura";
        mensaje.tipo = "error";
        this.eventosService.mostrarMensaje.next(mensaje);
        this.formularioCaptura.get("edad")?.setErrors({ "incorrect": true });
      } else {
        mensaje.mensaje = "Datos correctos!!";
        mensaje.tipo = "succes";
        this.eventosService.mostrarMensaje.next(mensaje);
      }
    }

  }
}
