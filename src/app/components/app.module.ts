import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HijoComponent } from './padre/hijo/hijo.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { PersonasComponent } from './personas/personas.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import { AutInterceptor } from '../services/aut.interceptor';
import { SplitterModule } from 'primeng/splitter';
import { MessagesModule } from 'primeng/messages';
import { PersonaAltaComponent } from './persona-alta/persona-alta/persona-alta.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    PadreComponent,
    HijoComponent,
    ComunicacionComponent,
    PersonasComponent,
    PersonaAltaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    SplitterModule,
    MessagesModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
  ],
  providers: [
    provideAnimations(), {
      provide: HTTP_INTERCEPTORS,
      useClass: AutInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
