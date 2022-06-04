import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface animal { nombre: string; especie: string; cuidadoPor: string; recintoResidencia: string; fechaDeLlegada: string}//ANIMAL

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  private animalCollection: AngularFirestoreCollection<animal>;
  animal: Observable<animal[]>;

  private animalDoc: AngularFirestoreDocument<animal> | undefined;

  paramMap: any;

  constructor(private afs: AngularFirestore) { 
    this.animalCollection = afs.collection<animal>('animal');
    this.animal = this.animalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as animal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listarAnimal() {
    return this.animal;
  }
  agregarAnimal(item: animal) {
    this.animalCollection.add(item);
  }

  eliminarAnimal(item: any) {
    this.animalDoc = this.afs.doc<animal>(`animal/${item.id}`);
    this.animalDoc.delete();
  }

  modificarAnimal(item: any) {
    this.animalDoc = this.afs.doc<animal>(`animal/${item.id}`);
    this.animalDoc.update(item);
  }
}
