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
  constructor(firestore: AngularFirestore) {
    this.animal = firestore.collection('animal').valueChanges();
  }
}
