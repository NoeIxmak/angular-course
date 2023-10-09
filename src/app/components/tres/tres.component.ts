import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { PersonaAltaComponent } from '../persona-alta/persona-alta/persona-alta.component';
import { EventosService } from 'src/app/services/eventos.service';
import { PersonaEditComponent } from '../persona-edit/persona-edit/persona-edit.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit, OnDestroy {
  numeros: number[];
  ediciones: boolean[] = [false, false, false, false];
  personaSubscription: Subscription | undefined;


  valor: string = '';

  displayColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  public valorParametro: number;
  indiceSeleccionado: number;
  private sub: any;

  personas: Persona[];
  dataSource: any;
  columnas: string[] = ['id', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'edad', 'edit'];

  columnasArreglo: string[] = ['valor', 'indice', 'editar', 'eliminar'];


  constructor(private route: ActivatedRoute, private dialogService: DialogService, public messageService: MessageService, private eventosService: EventosService) {
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

  // numeross: number[] = [1, 2, 3, 4, 5];
  // textChange: boolean[] = new Array(this.numeross.length).fill(false);

  // public changeValue(index: number) {
  //   this.textChange[index] = !this.textChange[index];
  // }

  // public deleteValue(index: number) {
  //   this.numeros.splice(index, 1);
  // }
  // public saveValue(index: number, newNumber: number) {
  //   this.numeros[index] = newNumber;
  //   this.textChange[index] = !this.textChange[index];
  // }


  clonedProducts: { [s: string]: Persona; } = {};


  onRowEditInit(persona: Persona) {
    this.clonedProducts[persona.id] = { ...persona };
  }

  onRowEditSave(persona: Persona) {

  }

  onRowEditCancel(persona: Persona, index: number) {
    this.personas[index] = this.clonedProducts[persona.id];
    delete this.clonedProducts[persona.id];
  }


  ref: DynamicDialogRef | undefined;

  show(id: number) {
    this.eventosService.editPersona.next(this.personas[id]);
    this.ref = this.dialogService.open(PersonaEditComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((product: Persona) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.nombre });
      }
    });

    this.ref.onMaximize.subscribe((value: any) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });

    this.personaSubscription = this.eventosService.editPersona.subscribe((valor => {
      this.personas[id].nombre = valor.nombre;
      this.personas[id].apellidoPaterno = valor.apellidoPaterno;
      this.personas[id].apellidoMaterno = valor.apellidoMaterno;
      this.personas[id].edad = valor.edad;
    }));
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
