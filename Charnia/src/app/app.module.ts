import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

// MODULOS
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // de este no estoy muy seguro
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';


//SERVICE
import { AutentifService } from "./servicios/autentif.service";
import { ConexionService } from './servicios/conexion.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MostrarDATOSComponent } from './componentes/mostrar-datos/mostrar-datos.component';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { ActividadesIndividualComponent } from './componentes/actividades-individual/actividades-individual.component';
import { DescubrezooComponent } from './componentes/descubrezoo/descubrezoo.component';
import { InfoZooComponent } from './componentes/info-zoo/info-zoo.component';
import { InfoComponent } from './componentes/actividades-individual/info/info.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RecuperarContrasenyaComponent } from './componentes/recuperar-contrasenya/recuperar-contrasenya.component';
import { VerifCorreoComponent } from './componentes/verif-correo/verif-correo.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { CarruselComponent } from './componentes/actividades-individual/carrusel/carrusel.component';
import { CardsComponent } from './componentes/actividades-individual/cards/cards.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { VisitantesComponent } from './componentes/venta-entradas/visitantes/visitantes.component';
import { FechaComponent } from './componentes/venta-entradas/fecha/fecha.component';
import { ExtraComponent } from './componentes/venta-entradas/extra/extra.component';
import { PagoComponent } from './componentes/venta-entradas/pago/pago.component';
import { VentaEntradasComponent } from './componentes/venta-entradas/venta-entradas.component';
import { DiaComponent } from './componentes/venta-entradas/fecha/dia/dia.component';
import { CuidadorComponent } from './componentes/mostrar-datos/cuidador/cuidador.component';


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
    PerfilUsuarioComponent,
    CarruselComponent,
    CardsComponent,
    InfoZooComponent,
    InfoComponent,
    BlogComponent,
    VisitantesComponent,
    FechaComponent,
    ExtraComponent,
    PagoComponent,
    VentaEntradasComponent,
    DiaComponent,
    CuidadorComponent
  ],
  imports: [
    AngularFireDatabaseModule, // de este no estoy muy seguro
    AngularFireAuthModule,
    AngularFireStorageModule, // de este no estoy muy seguro
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({ messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',}),
  ],
  providers: [ConexionService, AutentifService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
