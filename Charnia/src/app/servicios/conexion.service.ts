import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface variable { nombre: string; especie: string; cuidadoPor: string; recintoResidencia: string; }//ANIMAL
export interface variable2 { nombre: string; apellido: string; }//CUIDADOR
export interface variable3 { tamanyo: number; limpiadoPor: string}//RECINTO
export interface variable4 { comentario: string; opinionDe: string; valoracion: number;}//OPINION
export interface variable5 { contrasenya: string; correo:string; nombre:string}//USUARIO
export interface variable6 { descripcion: string; diario:string; titulo:string; nombre:string; finsemana:string, imagen:string, tituloCarta:string, idAnimal:string}//ACTIVIDAD-INDIVIDUAL
export interface variable7 { idAnimal: string; imagen:string;}//IMAGENES ANIMALES
export interface variable8 { descripcion: string; imagen:string; miniDescripcion: string; ruta:string; titulo: string;}//CONSERVACION


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private animalCollection: AngularFirestoreCollection<variable>;
  animal: Observable<variable[]>;

  private cuidadorCollection: AngularFirestoreCollection<variable2>;
  cuidador: Observable<variable2[]>;

  private recintoCollection: AngularFirestoreCollection<variable3>;
  recinto: Observable<variable3[]>;

  private opinionCollection: AngularFirestoreCollection<variable4>;
  opinion: Observable<variable4[]>;

  private usuarioCollection: AngularFirestoreCollection<variable5>;
  usuario: Observable<variable5[]>;

  private actividadesIndividualCollection: AngularFirestoreCollection<variable6>;
  individual: Observable<variable6[]>;

  private imagenesCollection: AngularFirestoreCollection<variable7>;
  imagen: Observable<variable7[]>;

  private conservacionCollection: AngularFirestoreCollection<variable8>;
  conservacion: Observable<variable8[]>;

 
  paramMap: any;

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

    this.recintoCollection = afs.collection<variable3>('recinto');
    this.recinto = this.recintoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable3;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.opinionCollection = afs.collection<variable4>('opinion');
    this.opinion = this.opinionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable4;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.usuarioCollection = afs.collection<variable5>('usuario');
    this.usuario = this.usuarioCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable5;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.actividadesIndividualCollection = afs.collection<variable6>('actividadIndividual');
    this.individual = this.actividadesIndividualCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable6;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.imagenesCollection = afs.collection<variable7>('imagenes');
    this.imagen = this.imagenesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable7;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.conservacionCollection = afs.collection<variable8>('conservacion');
    this.conservacion = this.conservacionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as variable8;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
  }

  listaAnimales() {
    return this.animal;
  }
  
  listaCuidadores() {
    return this.cuidador;
  }
  
  listaRecintos() {
    return this.recinto;
  }
  listaOpiniones() {
    return this.opinion;
  }
  listaUsuarios() {
    return this.usuario;
  }
  listaIndividual() {
    return this.individual;
  }
  imagenes() {
    return this.imagen;
  }
  listaConservacion() {
    return this.conservacion;
  }

  

}
