import { Component, OnInit } from '@angular/core';
import { ImagenesService } from './imagenes.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagen: any;
  item: any;
  campos: any = {
    idAnimal: '',
    imagen: ''
  }

  constructor(private conexion: ImagenesService) {
    this.conexion.listaImagen().subscribe(img => {
      this.imagen = img;
    });

  }

  ngOnInit(): void {

  }

  agregar() {
    this.conexion.agregarImagen(this.campos);
    this.campos.idAnimal = '';
    this.campos.imagen = '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarImagen(this.item);
  }
  editar(item: any) {
    this.campos = item;
  }
  modificarImagen() {
      this.conexion.modificarImagen(this.campos);
  }
  porIdDerecho(){
    this.imagen.sort((a: { id: number; },b: { id: number; }) =>{
      if(a.id < b.id){
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    })
  }
  porIdReves(){
    this.imagen.sort((a: { id: number; },b: { id: number; }) =>{
      if(a.id > b.id){
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porIdAnimalDerecho(){
    this.imagen.sort((a: { idAnimal: string; },b: { idAnimal: string; }) =>{
      if(a.idAnimal < b.idAnimal){
        return -1;
      }
      if (a.idAnimal > b.idAnimal) {
        return 1;
      }
      return 0;
    })
  }

  porIdAnimalReves(){
    this.imagen.sort((a: { idAnimal: string; },b: { idAnimal: string; }) =>{
      if(a.idAnimal > b.idAnimal){
        return -1;
      }
      if (a.idAnimal < b.idAnimal) {
        return 1;
      }
      return 0;
    })
  }
  porImagenDerecho(){
    this.imagen.sort((a: { imagen: string; },b: { imagen: string; }) =>{
      if(a.imagen < b.imagen){
        return -1;
      }
      if (a.imagen > b.imagen) {
        return 1;
      }
      return 0;
    })
  }
  porImagenReves(){
    this.imagen.sort((a: { imagen: string; },b: { imagen: string; }) =>{
      if(a.imagen > b.imagen){
        return -1;
      }
      if (a.imagen < b.imagen) {
        return 1;
      }
      return 0;
    })
  }
  
}
