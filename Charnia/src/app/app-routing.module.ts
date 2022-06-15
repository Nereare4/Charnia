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
import { MapaComponent } from './componentes/mapa/mapa.component';
import { PostsComponent } from './componentes/posts/posts.component';
import { PostsIndividualComponent } from './componentes/posts-individual/posts-individual.component';
import { ConservacionComponent } from './componentes/mostrar-datos/conservacion/conservacion.component';

const routes: Routes = [
  { path: 'actividad', component: ActividadesComponent },
  { path: 'descubre-el-zoo', component: DescubrezooComponent },
  { path: 'actividad/:nombre', component: ActividadesIndividualComponent },
  { path: 'conservacion', component: PostsComponent },
  { path: 'conservacion/:nombre', component: PostsIndividualComponent },
  { path: 'descubre-el-zoo/servicios', component: InfoZooComponent },
  { path: 'descubre-el-zoo/mapa', component: MapaComponent },
  { path: 'entradas', component: VentaEntradasComponent },
  { path: 'datos', component: MostrarDATOSComponent },
  { path: 'datos/cuidador', component: CuidadorComponent },
  { path: 'datos/imagenes', component: ImagenesComponent },
  { path: 'datos/actividad-individual', component: ActividadIndivComponent },
  { path: 'datos/animales', component: AnimalesComponent },
  { path: 'datos/recinto', component: RecintoComponent },
  { path: 'datos/usuario', component: UsuarioComponent },
  { path: 'datos/conservacion', component: ConservacionComponent },
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
