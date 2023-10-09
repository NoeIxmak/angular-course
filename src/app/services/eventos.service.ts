import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mensaje } from '../model/mensaje.model';
import { Persona } from '../model/persona.model';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public cambioValor: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public mostrarMensaje: BehaviorSubject<Mensaje> = new BehaviorSubject<Mensaje>(new Mensaje());
  public editPersona: BehaviorSubject<Persona> = new BehaviorSubject<Persona>(new Persona);
  constructor() { }
}
