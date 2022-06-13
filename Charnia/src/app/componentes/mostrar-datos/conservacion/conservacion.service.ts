import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface conservacion {descripcion: string; imagen: string; miniDescripcion: string; ruta: string; titulo: string;}

@Injectable({
  providedIn: 'root'
})
export class ConservacionService {

  private conservacionCollection: AngularFirestoreCollection<conservacion>;
  conservacion: Observable<conservacion[]>;

  private conservacionDoc: AngularFirestoreDocument<conservacion> | undefined;

  paramMap: any;

  constructor(private afs: AngularFirestore) { 
    this.conservacionCollection = afs.collection<conservacion>('conservacion');
    this.conservacion = this.conservacionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as conservacion;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listarConservacion() {
    return this.conservacion;
  }
  agregarConservacion(item: conservacion) {
    this.conservacionCollection.add(item);
  }

  eliminarConservacion(item: any) {
    this.conservacionDoc = this.afs.doc<conservacion>(`conservacion/${item.id}`);
    this.conservacionDoc.delete();
  }

  modificarConservacion(item: any) {
    this.conservacionDoc = this.afs.doc<conservacion>(`conservacion/${item.id}`);
    this.conservacionDoc.update(item);
  }
}


