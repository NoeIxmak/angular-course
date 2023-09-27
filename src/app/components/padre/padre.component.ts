import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.model';
import { PeticionesService } from 'src/app/services/peticiones.service';

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
  contrasenia: string;
  valorGet: string;
  mostrarHijo: boolean;

  constructor(private servicio: PeticionesService) {
    this.valor = '';
    this.contrasenia = '';
    this.valorGet = '';
    this.mostrarHijo = false;
  }

  public btnMostrarClick() {
    this.mostrarHijo = true;
  }

  public btnOcultarClick() {
    this.mostrarHijo = false;
  }

  public eventoRecepcionDato(valorRecepcion: string) {
    alert(`Valor recibido ${valorRecepcion}`);
  }


let usuario = new Login();
usuario.usuario = this.valor;
usuario.contrasenia = this.contrasenia;

this.servicio.ValidarUsuarios(usuario).subscribe({
  next: (dato) => {
    console.log("datos de respuesta:", dato);
    if (dato.ok) {
      alert("usuario valido")
      this.mostrarHijo = true
    } else {
      alert(dato.mensaje)
    }
  },
  error: (error) => { }
})

public peticionGet(){
  this.servicio.GetDatos(this.valorGet).subscribe({
    next:(dato)=>{
      if (dato.ok) {
        alert(dato.datos)
      }
    }
  })
}

public eventoRecepcionDato(valorRecepcion: string){
  debugger;
  alert("Valor recibido:" + valorRecepcion);
}

public eventoOcularHijo(mostrar: boolean){
  this.mostrarHijo = mostrar;
}

}