import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';


export interface usuario { contrasenya: string; correo:string; nombre:string; tipo: string; apellidos: string;}//USUARIO

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioCollection: AngularFirestoreCollection<usuario>;
  usuario: Observable<usuario[]>;

  private usuarioDoc: AngularFirestoreDocument<usuario> | undefined;

  paramMap: any;

  constructor(private afs: AngularFirestore) { 
    this.usuarioCollection = afs.collection<usuario>('usuario');
    this.usuario = this.usuarioCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listaUsuario() {
    return this.usuario;
  }
  agregarUsuario(item: usuario) {
    this.usuarioCollection.add(item);
  }

  eliminarUsuario(item: any) {
    this.usuarioDoc = this.afs.doc<usuario>(`usuario/${item.id}`);
    this.usuarioDoc.delete();
  }

  modificarUsuario(item: any) {
    this.usuarioDoc = this.afs.doc<usuario>(`usuario/${item.id}`);
    this.usuarioDoc.update(item);
  }
}
