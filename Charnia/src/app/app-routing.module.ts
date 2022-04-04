import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { VerifCorreoComponent } from './componentes/verif-correo/verif-correo.component';
import { RecuperarContrasenyaComponent } from './componentes/recuperar-contrasenya/recuperar-contrasenya.component';
import { ActividadesIndividualComponent } from './componentes/actividades-individual/actividades-individual.component';
import { AutentifGuard } from './guard/autentif.guard';

const routes: Routes = [
  { path: 'actividad', component: ActividadesComponent },
<<<<<<< Updated upstream
  { path: 'actividad/:nombre', component: ActividadesIndividualComponent },
=======
  { path: 'actividad/:titulo', component: ActividadesIndividualComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [AutentifGuard] },
  { path: 'verificar-correo', component: VerifCorreoComponent },
  { path: 'recuperar-clave', component: RecuperarContrasenyaComponent },
>>>>>>> Stashed changes
  { path: '', component: InicioComponent }, //no se pone ninguna ruta
  { path: '**', redirectTo: '/' } //se indica una ruta que no existe
  /* { path: 'ejemploDeURLguarded', component: ejemploDeURLguardedComponent, canActivate: [AutentifGuard]} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
