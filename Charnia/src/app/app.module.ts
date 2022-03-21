import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { ConexionService } from './servicios/conexion.service';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MostrarDATOSComponent } from './componentes/mostrar-datos/mostrar-datos.component';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { ActividadesIndividualComponent } from './componentes/actividades-individual/actividades-individual.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MostrarDATOSComponent,
    InicioComponent,
    ActividadesComponent,
    ActividadesIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
