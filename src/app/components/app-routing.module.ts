import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';
import { TresComponent } from './tres/tres.component';
import { PadreComponent } from './padre/padre.component';
import { PersonaAltaComponent } from './persona-alta/persona-alta/persona-alta.component';

const routes: Routes = [
  { path: 'uno', component: UnoComponent },
  { path: 'dos', component: DosComponent },
  { path: 'tres', component: TresComponent },
  { path: 'padre', component: PadreComponent },
  { path: 'persona-alta', component: PersonaAltaComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
