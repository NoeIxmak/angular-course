import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() parametro: string;
  @Output() eventoMensaje = new EventEmitter<string>();

  valorHijo: string;

  constructor() {
    this.parametro = '';
    this.valorHijo = '';
  }

  public btnRegresarClick() {
    debugger;
    this.eventoMensaje.emit(this.valorHijo);
  }
}
