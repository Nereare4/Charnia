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
  constructor(firestore: AngularFirestore) {
    this.animal = firestore.collection('animal').valueChanges();
    this.cuidador = firestore.collection('cuidador').valueChanges();
    this.recinto = firestore.collection('recinto').valueChanges();
  }
}
