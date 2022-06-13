import { Component, OnInit } from '@angular/core';
import { ActividadIndivService } from './actividad-indiv.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-actividad-indiv',
  templateUrl: './actividad-indiv.component.html',
  styleUrls: ['./actividad-indiv.component.css']
})
export class ActividadIndivComponent implements OnInit {

  actividadIndividual: any[] = [];
  item: any;
  palabra: any;
  aux: any[] = [];
  aux2: any[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;
  campos: any = {
    descripcion: '',
    diario: '',
    finsemana: '',
    imagen: '',
    nombre: '',
    titulo: '',
    tituloCarta: '',
    idAnimal: '',
  }

  constructor(private conexion: ActividadIndivService) {
    this.conexion.listaActividadIndividual().subscribe(indiv => {
      this.actividadIndividual = indiv;
      for (let i = 0; i < indiv.length; i++) {
        this.aux2.push(indiv[i]);
      }
    });
  }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarActividadIndividual(this.campos);
    this.campos.descripcion = '';
    this.campos.diario = '';
    this.campos.finsemana = '';
    this.campos.imagen = '';
    this.campos.nombre = '';
    this.campos.titulo = '';
    this.campos.tituloCarta = '';
    this.campos.idAnimal = '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarActividadIndividual(this.item);
  }
  editar(item: any) {
    this.campos = item;
  }
  modificarActividad() {
    this.conexion.modificarActividadIndividual(this.campos);
  }
  buscar() {
    this.palabra = document.forms[0]["buscar"].value
    this.actividadIndividual.length = 0;
    for (let i = 0; i < this.aux2.length; i++) {
      this.item = this.aux2[i];
      var descripcion = this.item.descripcion;
      var img = this.item.imagen;
      var nombre = this.item.nombre;
      var titulo = this.item.titulo
      var tituloCarta = this.item.tituloCarta;
      var idAnimal = this.item.idAnimal;
      if (this.palabra.length != 0 && this.aux2.length != 0) {
        if (descripcion.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
            img.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
            nombre.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
            titulo.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
            tituloCarta.toLowerCase().search(this.palabra.toLowerCase()) != -1|| 
            idAnimal.toLowerCase().search(this.palabra.toLowerCase()) != -1) {
              this.aux.push(this.aux2[i]);
        }
      }
    }
    this.actividadIndividual = this.aux;
  }
  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  porIdDerecho() {
    this.actividadIndividual.sort((a: { id: number; }, b: { id: number; }) => {
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
    this.actividadIndividual.sort((a: { id: number; }, b: { id: number; }) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porRutaDerecho() {
    this.actividadIndividual.sort((a: { nombre: string; }, b: { nombre: string; }) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porRutaReves() {
    this.actividadIndividual.sort((a: { nombre: string; }, b: { nombre: string; }) => {
      if (a.nombre > b.nombre) {
        return -1;
      }
      if (a.nombre < b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porTituloDerecho() {
    this.actividadIndividual.sort((a: { titulo: string; }, b: { titulo: string; }) => {
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
    this.actividadIndividual.sort((a: { titulo: string; }, b: { titulo: string; }) => {
      if (a.titulo > b.titulo) {
        return -1;
      }
      if (a.titulo < b.titulo) {
        return 1;
      }
      return 0;
    })
  }
  porTituloCartaDerecho() {
    this.actividadIndividual.sort((a: { tituloCarta: string; }, b: { tituloCarta: string; }) => {
      if (a.tituloCarta < b.tituloCarta) {
        return -1;
      }
      if (a.tituloCarta > b.tituloCarta) {
        return 1;
      }
      return 0;
    })
  }
  porTituloCartaReves() {
    this.actividadIndividual.sort((a: { tituloCarta: string; }, b: { tituloCarta: string; }) => {
      if (a.tituloCarta > b.tituloCarta) {
        return -1;
      }
      if (a.tituloCarta < b.tituloCarta) {
        return 1;
      }
      return 0;
    })
  }
  porIdAnimalDerecho() {
    this.actividadIndividual.sort((a: { idAnimal: string; }, b: { idAnimal: string; }) => {
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
    this.actividadIndividual.sort((a: { idAnimal: string; }, b: { idAnimal: string; }) => {
      if (a.idAnimal > b.idAnimal) {
        return -1;
      }
      if (a.idAnimal < b.idAnimal) {
        return 1;
      }
      return 0;
    })
  }

}
