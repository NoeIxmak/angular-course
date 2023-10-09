import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { Mensaje } from 'src/app/model/mensaje.model';
import { Persona } from 'src/app/model/persona.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
  formularioCaptura: FormGroup;
  personaSubscription: Subscription;
  persona = new Persona();

  constructor(private formBuilder: FormBuilder, private eventosService: EventosService, public ref: DynamicDialogRef) {
    this.formularioCaptura = formBuilder.group({
      'nombre': ['', Validators.required],
      'apellidoPaterno': ['', Validators.required],
      'apellidoMaterno': ['', Validators.required],
      'edad': [0, Validators.required]
    });
    this.personaSubscription = eventosService.editPersona.subscribe((valor) => {
      this.formularioCaptura = formBuilder.group({
        'nombre': [valor.nombre, Validators.required],
        'apellidoPaterno': [valor.apellidoPaterno, Validators.required],
        'apellidoMaterno': [valor.apellidoMaterno, Validators.required],
        'edad': [valor.edad, Validators.required]
      });
    });
  }

  ngOnInit(): void {

  }

  btnGuardarClick() {
    // debugger;
    console.log('error', this.formularioCaptura);
    let mensaje = new Mensaje();
    if (!this.formularioCaptura.valid) {

      mensaje.mensaje = "Error en la captura";
      mensaje.tipo = "error";
      // this.eventosService.mostrarMensaje.next(mensaje);
      this.formularioCaptura.markAllAsTouched();

      if (this.formularioCaptura.get("edad")?.value <= 17) {
        mensaje.mensaje = "Error en la captura";
        mensaje.tipo = "error";
        this.eventosService.mostrarMensaje.next(mensaje);
        this.formularioCaptura.get("edad")?.setErrors({ "incorrect": true });
      }
    } else {
      console.log(this.persona);
      this.formularioCaptura.markAllAsTouched();
      this.persona.nombre = this.formularioCaptura.get("nombre")?.value;
      this.persona.apellidoPaterno = this.formularioCaptura.get("apellidoPaterno")?.value;
      this.persona.apellidoMaterno = this.formularioCaptura.get("apellidoMaterno")?.value;
      this.persona.edad = this.formularioCaptura.get("edad")?.value;
      this.eventosService.editPersona.next(this.persona);
      mensaje.mensaje = "Datos correctos!!";
      mensaje.tipo = "success";
      this.eventosService.mostrarMensaje.next(mensaje);
      this.ref.close();
    }

  }
}
