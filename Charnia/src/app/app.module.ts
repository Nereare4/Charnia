import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AutentifService } from "./servicios/autentif.service";
import { ConexionService } from './servicios/conexion.service';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MostrarDATOSComponent } from './componentes/mostrar-datos/mostrar-datos.component';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { ActividadesIndividualComponent } from './componentes/actividades-individual/actividades-individual.component';
import { DescubrezooComponent } from './componentes/descubrezoo/descubrezoo.component';

import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RecuperarContrasenyaComponent } from './componentes/recuperar-contrasenya/recuperar-contrasenya.component';
import { VerifCorreoComponent } from './componentes/verif-correo/verif-correo.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // de este no estoy muy seguro
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component'; // de este no estoy muy seguro

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MostrarDATOSComponent,
    InicioComponent,
    ActividadesComponent,
    ActividadesIndividualComponent,
    DescubrezooComponent,
    LoginComponent,
    RegistroComponent,
    RecuperarContrasenyaComponent,
    VerifCorreoComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    AngularFireDatabaseModule, // de este no estoy muy seguro
    AngularFireAuthModule,
    AngularFireStorageModule, // de este no estoy muy seguro
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [ConexionService, AutentifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
