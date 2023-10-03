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
    this.mostrarHijo = false;
    this.valorGet = '';
  }

  public btnActualizarClick() {
    let usuario = new Login();
    usuario.usuario = this.valor;
    usuario.contraseña = this.contrasenia;
    this.servicio.CambiarContraseña(usuario).subscribe({
      next: (dato) => {
        if (dato.ok) {
          alert("La contraseña se cambio a: " + (dato.datos as Login).contraseña);
        }
        else {
          alert(dato.mensaje);
        }
      },
      error: (error) => {
        console.log("error:", error.message);
        alert("Error comunicación:" + error.message);
      }
    })
  }

  public btnMostrarClick() {
    // this.mostrarHijo = true;

    let usuario = new Login();
    usuario.usuario = this.valor;
    usuario.contraseña = this.contrasenia;

    this.servicio.ValidarUsuario(usuario).subscribe({
      next: (dato) => {
        console.log("datos de respuesta:", dato);
        if (dato.ok) {
          // debugger;
          alert("usuario valido")
          this.mostrarHijo = true

          let usuarioStr = JSON.stringify(usuario)

          localStorage.setItem("usuario", usuarioStr)
          console.log("datos de respuesta:");

        } else {
          alert(dato.mensaje)
        }
      },
      error: (error) => { }
    })

  }

  // public btnOcultarClick() {
  //   this.mostrarHijo = false;
  // }

  // public eventoRecepcionDato(valorRecepcion: string) {
  //   alert(`Valor recibido ${valorRecepcion}`);
  // }

  public peticionGet() {
    // debugger
    this.servicio.GetDatos(this.valorGet).subscribe({
      next: (dato) => {
        if (dato.ok) {
          alert(dato.datos);
        }
      },
      error: (error) => {
        console.log("error:", error);
      }
    });
    console.log("continua");

  }

  public eventoRecepcionDato(valorRecepcion: string) {
    // debugger;
    alert("Valor recibido:" + valorRecepcion);
  }

  public eventoOcultarHijo(mostrar: boolean) {
    this.mostrarHijo = mostrar;
  }

}