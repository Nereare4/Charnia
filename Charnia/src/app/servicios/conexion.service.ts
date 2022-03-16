import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface variable { nombre: string; especie:string}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private animalCollection: AngularFirestoreCollection<variable>;
  animal: Observable<variable[]>;

  constructor(private afs: AngularFirestore) {
    this.animalCollection = afs.collection<variable>('animal');
    this.animal = this.animalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listaAnimal(){
    return this.animal;
  }
}
