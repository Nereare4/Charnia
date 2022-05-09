import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//ACCESO A LAS TABLAS
export class AppComponent {
  animal: Observable<any[]>;
  cuidador: Observable<any[]>;
  recinto: Observable<any[]>;
  opinion: Observable<any[]>;
  usuario: Observable<any[]>;
  individual: Observable<any[]>;
  imagenes: Observable<any[]>;

    
  constructor(firestore: AngularFirestore) {
    this.animal = firestore.collection('animal').valueChanges();
    this.cuidador = firestore.collection('cuidador').valueChanges();
    this.recinto = firestore.collection('recinto').valueChanges();
    this.opinion = firestore.collection('opinion').valueChanges();
    this.usuario = firestore.collection('usuario').valueChanges();
    this.individual = firestore.collection('actividadIndividual').valueChanges();
    this.imagenes = firestore.collection('imagenes').valueChanges();

  }
}
