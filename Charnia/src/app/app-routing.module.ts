import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ActividadesIndividualComponent } from './componentes/actividades-individual/actividades-individual.component';

const routes: Routes = [
  { path: 'actividad', component: ActividadesComponent },
  { path: 'actividad/:nombre', component: ActividadesIndividualComponent },
  { path: '', component: InicioComponent }, //no se pone ninguna ruta
  { path: '**', redirectTo: '/' } //se indica una ruta que no existe

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
