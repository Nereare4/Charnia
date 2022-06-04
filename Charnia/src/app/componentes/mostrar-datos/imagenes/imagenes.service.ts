import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface img { idAnimal: string; imagen: string; }//IMAGENES ANIMALES

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  private imagenesCollection: AngularFirestoreCollection<img>;
  imagen: Observable<img[]>;

  private imagenDoc: AngularFirestoreDocument<img> | undefined;

  paramMap: any;

  constructor(private afs: AngularFirestore) {
    this.imagenesCollection = afs.collection<img>('imagenes');
    this.imagen = this.imagenesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as img;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaImagen() {
    return this.imagen;
  }

  agregarImagen(item: img) {
    this.imagenesCollection.add(item);
  }

  eliminarImagen(item: any) {
    this.imagenDoc = this.afs.doc<img>(`imagenes/${item.id}`);
    this.imagenDoc.delete();
  }

  modificarImagen(item: any) {
    this.imagenDoc = this.afs.doc<img>(`imagenes/${item.id}`);
    this.imagenDoc.update(item);
  }
}
