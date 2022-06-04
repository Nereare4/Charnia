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
import { DescubrezooComponent } from './componentes/descubrezoo/descubrezoo.component';
import { InfoZooComponent } from './componentes/info-zoo/info-zoo.component';
import { AutentifGuard } from './guard/autentif.guard';
import { BlogComponent } from './componentes/blog/blog.component';
import { VentaEntradasComponent } from './componentes/venta-entradas/venta-entradas.component';
import { MostrarDATOSComponent } from './componentes/mostrar-datos/mostrar-datos.component';
import { CuidadorComponent } from './componentes/mostrar-datos/cuidador/cuidador.component';
import { ImagenesComponent } from './componentes/mostrar-datos/imagenes/imagenes.component';
import { ActividadIndivComponent } from './componentes/mostrar-datos/actividad-indiv/actividad-indiv.component';
import { AnimalesComponent } from './componentes/mostrar-datos/animales/animales.component';
import { RecintoComponent } from './componentes/mostrar-datos/recinto/recinto.component';
import { UsuarioComponent } from './componentes/mostrar-datos/usuario/usuario.component';
// import { VisitantesComponent } from './componentes/venta-entradas/visitantes/visitantes.component';
// import { FechaComponent } from './componentes/venta-entradas/fecha/fecha.component';
// import { ExtraComponent } from './componentes/venta-entradas/extra/extra.component';
// import { PagoComponent } from './componentes/venta-entradas/pago/pago.component';

const routes: Routes = [
  { path: 'actividad', component: ActividadesComponent },
  { path: 'descubre-el-zoo', component: DescubrezooComponent },
  { path: 'actividad/:nombre', component: ActividadesIndividualComponent },
  { path: 'descubre-el-zoo/servicios', component: InfoZooComponent },
  { path: 'entradas', component: VentaEntradasComponent },
  { path: 'datos', component: MostrarDATOSComponent },
  { path: 'datos/cuidador', component: CuidadorComponent },
  { path: 'datos/imagenes', component: ImagenesComponent },
  { path: 'datos/actividad-individual', component: ActividadIndivComponent },
  { path: 'datos/animales', component: AnimalesComponent },
  { path: 'datos/recinto', component: RecintoComponent },
  { path: 'datos/usuario', component: UsuarioComponent },
  // { path: 'entradas/visitantes', component: VisitantesComponent },
  // { path: 'entradas/fecha', component: FechaComponent },
  // { path: 'entradas/extras', component: ExtraComponent },
  // { path: 'entradas/pago', component: PagoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [AutentifGuard] },
  { path: 'verificar-correo', component: VerifCorreoComponent },
  { path: 'recuperar-clave', component: RecuperarContrasenyaComponent },
  { path: '', component: InicioComponent }, //no se pone ninguna ruta
  { path: '**', redirectTo: '/' } //se indica una ruta que no existe
  /* { path: 'ejemploDeURLguarded', component: ejemploDeURLguardedComponent, canActivate: [AutentifGuard]} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
