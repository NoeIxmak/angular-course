import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas: Persona[];
  public valorParametro: number;
  indiceSeleccionado: number;
  numeros: number[];
  dataSource: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.personas = new Array();
    this.valorParametro = 0;
    this.indiceSeleccionado = 0;

    this.numeros = new Array();
    for (let index = 0; index < 10; index++) {
      let persona = new Persona();
      persona.id = index;
      persona.nombre = "Nombre " + index;
      persona.apellidoPaterno = "Paterno " + index;
      persona.apellidoMaterno = "Materno " + index;
      persona.edad = index;
      this.personas.push(persona);
      this.numeros.push(index);
    }
    this.dataSource = new MatTableDataSource(this.personas);
  }
}
