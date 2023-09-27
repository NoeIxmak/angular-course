import { Component } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent {
  mensaje: string = 'Ejemplo NGMODEL desde la variable'
  binding: any;

  // otraVariable: string;

  // constructor() {
  //   this.otraVariable='Algun valor';
  // }

  // ngOnInit(): void {

  // }

  public btnMensaje_Click() {
    alert("El valor es: " + this.mensaje)
  }
}
