import { Component, OnInit } from '@angular/core';
import { ConservacionService } from './conservacion.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-conservacion',
  templateUrl: './conservacion.component.html',
  styleUrls: ['./conservacion.component.css']
})
export class ConservacionComponent implements OnInit {

  conservacion : any[] = [];
  item: any;
  palabra: any;
  aux: any[] = [];
  aux2: any[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;
  campos: any = {
    descripcion: '',
    imagen: '',
    miniDescripcion: '',
    ruta: '',
    titulo: '',
  }

  constructor(private conexion: ConservacionService) { 
    this.conexion.listarConservacion().subscribe(cons =>{
      this.conservacion = cons;
      for (let i = 0; i < cons.length; i++) {
        this.aux2.push(cons[i]);
        
      }

    });
  }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarConservacion(this.campos);
    this.campos.descripcion = '';
    this.campos.imagen = '';
    this.campos.miniDescripcion = '';
    this.campos.ruta = '';
    this.campos.titulo = '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarConservacion(this.item);
  }
  editar(item: any) {
    this.campos = item;
  }
  modificarConservacion() {
    this.conexion.modificarConservacion(this.campos);
  }
  buscar() {
    this.palabra = document.forms[0]["buscar"].value
    this.conservacion.length = 0;
    for (let i = 0; i < this.aux2.length; i++) {
      this.item = this.aux2[i];
      var descripcion = this.item.descripcion;
      var imagen = this.item.imagen;
      var miniDescripcion = this.item.imagen;
      var ruta = this.item.ruta;
      var titulo = this.item.titulo;
      if (this.palabra.length != 0 && this.aux2.length != 0) {
        if (descripcion.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
        imagen.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
        miniDescripcion.toLowerCase().search(this.palabra.toLowerCase()) != -1|| 
        ruta.toLowerCase().search(this.palabra.toLowerCase()) != -1 ||
        titulo.toLowerCase().search(this.palabra.toLowerCase()) != -1) {
          this.aux.push(this.aux2[i]);
        }
      }
    }
    this.conservacion = this.aux;
  }
  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  porIdDerecho() {
    this.conservacion.sort((a: { id: number; }, b: { id: number; }) => {
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
    this.conservacion.sort((a: { id: number; }, b: { id: number; }) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porDescripcionDerecho() {
    this.conservacion.sort((a: { descripcion: string; }, b: { descripcion: string; }) => {
      if (a.descripcion < b.descripcion) {
        return -1;
      }
      if (a.descripcion > b.descripcion) {
        return 1;
      }
      return 0;
    })
  }
  porDescripcionReves() {
    this.conservacion.sort((a: { descripcion: string; }, b: { descripcion: string; }) => {
      if (a.descripcion > b.descripcion) {
        return -1;
      }
      if (a.descripcion < b.descripcion) {
        return 1;
      }
      return 0;
    })
  }
  porImagenDerecho() {
    this.conservacion.sort((a: { imagen: string; }, b: { imagen: string; }) => {
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
    this.conservacion.sort((a: { imagen: string; }, b: { imagen: string; }) => {
      if (a.imagen > b.imagen) {
        return -1;
      }
      if (a.imagen < b.imagen) {
        return 1;
      }
      return 0;
    })
  }
  porMiniDescripcionDerecho() {
    this.conservacion.sort((a: { miniDescripcion: string; }, b: { miniDescripcion: string; }) => {
      if (a.miniDescripcion < b.miniDescripcion) {
        return -1;
      }
      if (a.miniDescripcion > b.miniDescripcion) {
        return 1;
      }
      return 0;
    })
  }
  porMiniDescripcionReves() {
    this.conservacion.sort((a: { miniDescripcion: string; }, b: { miniDescripcion: string; }) => {
      if (a.miniDescripcion > b.miniDescripcion) {
        return -1;
      }
      if (a.miniDescripcion < b.miniDescripcion) {
        return 1;
      }
      return 0;
    })
  }
  porRutaDerecho() {
    this.conservacion.sort((a: { ruta: string; }, b: { ruta: string; }) => {
      if (a.ruta < b.ruta) {
        return -1;
      }
      if (a.ruta > b.ruta) {
        return 1;
      }
      return 0;
    })
  }
  porRutaReves() {
    this.conservacion.sort((a: { ruta: string; }, b: { ruta: string; }) => {
      if (a.ruta > b.ruta) {
        return -1;
      }
      if (a.ruta < b.ruta) {
        return 1;
      }
      return 0;
    })
  }
  porTituloDerecho() {
    this.conservacion.sort((a: { titulo: string; }, b: { titulo: string; }) => {
      if (a.titulo < b.titulo) {
        return -1;
      }
      if (a.titulo > b.titulo) {
        return 1;
      }
      return 0;
    })
  }
  porTituloReves() {
    this.conservacion.sort((a: { titulo: string; }, b: { titulo: string; }) => {
      if (a.titulo > b.titulo) {
        return -1;
      }
      if (a.titulo < b.titulo) {
        return 1;
      }
      return 0;
    })
  }
}

