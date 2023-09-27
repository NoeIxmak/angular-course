import { Component } from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent {
  numeros: number[] = [1, 2, 3, 4, 5];
  textChange: boolean[] = new Array(this.numeros.length).fill(false);

  // public mostrarAlerta(numero: number) {
  //   alert(`Has presionado el número ${numero}`);
  // }

  public changeValue(index: number) {
    this.textChange[index] = !this.textChange[index];
  }

  public saveValue(index: number, newNumber: number) {
    this.numeros[index] = newNumber;
    this.textChange[index] = !this.textChange[index];
  }

  public deleteValue(index: number) {
    this.numeros.splice(index, 1);
  }

  tracByFn(index: any, item: any) {
    return index;
  }
}
