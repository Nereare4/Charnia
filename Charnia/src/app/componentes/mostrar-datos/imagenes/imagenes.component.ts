import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ImagenesService } from './imagenes.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagen: any[] = [];
  item: any;
  palabra: any;
  aux: any[] = [];
  aux2: any[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;
  campos: any = {
    idAnimal: '',
    imagen: ''
  }

  constructor(private conexion: ImagenesService) {
    this.conexion.listaImagen().subscribe(img => {
      this.imagen = img;
      for (let i = 0; i < img.length; i++) {
        this.aux2.push(img[i]);
      }
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
  buscar() {
    this.palabra = document.forms[0]["buscar"].value
    this.imagen.length = 0;
    for (let i = 0; i < this.aux2.length; i++) {
      this.item = this.aux2[i];
      var id = this.item.id;
      var img = this.item.imagen;
      var idAnimal = this.item.idAnimal;
      if (this.palabra.length != 0 && this.aux2.length != 0) {
        if (id.toLowerCase().search(this.palabra.toLowerCase()) != -1 || img.toLowerCase().search(this.palabra.toLowerCase()) != -1 || idAnimal.toLowerCase().search(this.palabra.toLowerCase()) != -1) {
          this.aux.push(this.aux2[i]);
        }
      }
    }
    this.imagen = this.aux;
  }
  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  porIdDerecho() {
    this.imagen.sort((a: { id: number; }, b: { id: number; }) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    })
  }
  porIdReves() {
    this.imagen.sort((a: { id: number; }, b: { id: number; }) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porIdAnimalDerecho() {
    this.imagen.sort((a: { idAnimal: string; }, b: { idAnimal: string; }) => {
      if (a.idAnimal < b.idAnimal) {
        return -1;
      }
      if (a.idAnimal > b.idAnimal) {
        return 1;
      }
      return 0;
    })
  }

  porIdAnimalReves() {
    this.imagen.sort((a: { idAnimal: string; }, b: { idAnimal: string; }) => {
      if (a.idAnimal > b.idAnimal) {
        return -1;
      }
      if (a.idAnimal < b.idAnimal) {
        return 1;
      }
      return 0;
    })
  }
  porImagenDerecho() {
    this.imagen.sort((a: { imagen: string; }, b: { imagen: string; }) => {
      if (a.imagen < b.imagen) {
        return -1;
      }
      if (a.imagen > b.imagen) {
        return 1;
      }
      return 0;
    })
  }
  porImagenReves() {
    this.imagen.sort((a: { imagen: string; }, b: { imagen: string; }) => {
      if (a.imagen > b.imagen) {
        return -1;
      }
      if (a.imagen < b.imagen) {
        return 1;
      }
      return 0;
    })
  }

}
