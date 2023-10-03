import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HijoComponent } from './padre/hijo/hijo.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { PersonasComponent } from './personas/personas.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { AutInterceptor } from '../services/aut.interceptor';

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
