import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface variable { nombre: string; especie:string; cuidadoPor:Reference;}
export interface variable2 { nombre: string; apellido:string;}


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private animalCollection: AngularFirestoreCollection<variable>;
  animal: Observable<variable[]>;

  private cuidadorCollection: AngularFirestoreCollection<variable2>;
  cuidador: Observable<variable2[]>;

  constructor(private afs: AngularFirestore) {
    this.animalCollection = afs.collection<variable>('animal');
    this.animal = this.animalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.cuidadorCollection = afs.collection<variable2>('cuidador');
    this.cuidador = this.cuidadorCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable2;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listaAnimal(){
    return this.animal;
  }
  listaCuidador(){
    return this.cuidador;
  }
}
