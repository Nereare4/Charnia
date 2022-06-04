import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface recinto { tamanyo: number; limpiadoPor: string}//RECINTO

@Injectable({
  providedIn: 'root'
})
export class RecintoService {

  private recintoCollection: AngularFirestoreCollection<recinto>;
  recinto: Observable<recinto[]>;

  private recintoDoc: AngularFirestoreDocument<recinto> | undefined;

  paramMap: any;
  
  constructor(private afs: AngularFirestore) { 

    this.recintoCollection = afs.collection<recinto>('recinto');
    this.recinto = this.recintoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as recinto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }
  listarRecinto() {
    return this.recinto;
  }
  agregarRecinto(item: recinto) {
    this.recintoCollection.add(item);
  }

  eliminarRecinto(item: any) {
    this.recintoDoc = this.afs.doc<recinto>(`recinto/${item.id}`);
    this.recintoDoc.delete();
  }

  modificarRecinto(item: any) {
    this.recintoDoc = this.afs.doc<recinto>(`recinto/${item.id}`);
    this.recintoDoc.update(item);
  }
}
