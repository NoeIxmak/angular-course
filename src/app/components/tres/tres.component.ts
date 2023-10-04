import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit {
  numeros: number[];
  ediciones: boolean[] = [false, false, false, false];


  valor: string = '';

  displayColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  public valorParametro: number;
  indiceSeleccionado: number;
  private sub: any;

  personas: Persona[];
  dataSource: any;
  columnas: string[] = ['id', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'edad'];

  columnasArreglo: string[] = ['valor', 'indice', 'editar', 'eliminar'];
  constructor(private route: ActivatedRoute) {
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




  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      debugger;
      this.valorParametro;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public btnSeleccionar(indice: number) {
    this.ediciones[indice] = !this.ediciones[indice];
    this.indiceSeleccionado = indice;
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
