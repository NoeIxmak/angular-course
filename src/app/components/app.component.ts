import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnDestroy {
  title = 'TestExample';
  subscription: Subscription;
  bloquear: boolean = false;
  constructor(private eventoServices: EventosService, private messageService: MessageService) {
    this.subscription = eventoServices.mostrarMensaje.subscribe((valor) => {
      this.messageService.add({ severity: valor.tipo, summary: 'Application', detail: valor.mensaje });
      setTimeout(() => {
        this.bloquear = false;
        this.messageService.clear();
      }, 3000);
    });
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
}
