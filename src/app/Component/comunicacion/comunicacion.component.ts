import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/eventos.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {

  }

  public btnMostrarControlClick() {
    this.eventoService.cambioValor.next(true);
  }
}
