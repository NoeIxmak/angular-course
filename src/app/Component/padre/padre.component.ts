import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  valor: string;
  mostrarHijo: boolean;
  
  constructor() {
    this.valor = '';
    this.mostrarHijo = false;
  }

  public btnMostrarClick() {
    this.mostrarHijo = true;
  }

  public eventoRecepcionDato(valorRecepcion: string) {
    alert(`Valor recibido ${valorRecepcion}`);
  }
}
