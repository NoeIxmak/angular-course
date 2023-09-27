import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy {

  @Input() parametro: string;
  @Output() eventoMensaje = new EventEmitter<string>();
  @Output() eventoOcultar = new EventEmitter<boolean>();

  valorHijo: string;
  mostrarControl: boolean = false;
  myEventSubscription: Subscription;

  constructor(private eventoService: EventosService) {
    this.parametro = '';
    this.valorHijo = '';
    this.myEventSubscription = eventoService.cambioValor.subscribe((valor) => {
      this.mostrarControl = valor;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.eventoService.cambioValor.next(false);
    this.myEventSubscription.unsubscribe();
  }

  public btnRegresarRespuestaClick() {
    this.eventoMensaje.emit(this.valorHijo);
  }

  public btnMostrarControlClick() {
    this.mostrarControl = false;
  }

  public btnRegresarClick() {
    debugger;
    this.eventoOcultar.emit(false);
  }
}
