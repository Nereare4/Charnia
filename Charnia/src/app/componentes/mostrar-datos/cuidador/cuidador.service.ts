import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface cuidado { nombre: string; apellido: string; fechaDeContratacion: string}//CUIDADOR

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {

  private cuidadorCollection: AngularFirestoreCollection<cuidado>;
  cuidador: Observable<cuidado[]>;

  private cuidadorDoc: AngularFirestoreDocument<cuidado> | undefined;

  paramMap: any;

  constructor(private afs: AngularFirestore) { 

    this.cuidadorCollection = afs.collection<cuidado>('cuidador');
    this.cuidador = this.cuidadorCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as cuidado;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  listaCuidador() {
    return this.cuidador;
  }

  agregarCuidador(item: cuidado){
    this.cuidadorCollection.add(item);
  }

  eliminarCuidador(item: any) {
    this.cuidadorDoc = this.afs.doc<cuidado>(`cuidador/${item.id}`);
    this.cuidadorDoc.delete();
  }

  modificarCuidador(item: any) {
    this.cuidadorDoc = this.afs.doc<cuidado>(`cuidador/${item.id}`);
    this.cuidadorDoc.update(item);
  }
}
