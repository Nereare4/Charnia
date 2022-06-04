import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface actividadIndividual { descripcion: string; diario:string; titulo:string; nombre:string; finsemana:string, imagen:string, tituloCarta:string, idAnimal:string}//ACTIVIDAD-INDIVIDUAL

@Injectable({
  providedIn: 'root'
})
export class ActividadIndivService {

  private actividadesIndividualCollection: AngularFirestoreCollection<actividadIndividual>;
  individual: Observable<actividadIndividual[]>;

  private actividadIndividualDoc: AngularFirestoreDocument<actividadIndividual> | undefined;
  
  paramMap: any;

  constructor(private afs: AngularFirestore) { 

    this.actividadesIndividualCollection = afs.collection<actividadIndividual>('actividadIndividual');
    this.individual = this.actividadesIndividualCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as actividadIndividual;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listaActividadIndividual() {
    return this.individual;
  }
  agregarActividadIndividual(item: actividadIndividual) {
    this.actividadesIndividualCollection.add(item);
  }

  eliminarActividadIndividual(item: any) {
    this.actividadIndividualDoc = this.afs.doc<actividadIndividual>(`actividadIndividual/${item.id}`);
    this.actividadIndividualDoc.delete();
  }

  modificarActividadIndividual(item: any) {
    this.actividadIndividualDoc = this.afs.doc<actividadIndividual>(`actividadIndividual/${item.id}`);
    this.actividadIndividualDoc.update(item);
  }
}
