import { Component, OnInit } from '@angular/core';
import { AnimalesService } from './animales.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: any[] = [];
  // fechaSplit: Array<string> = [];
  item: any;
  palabra: any;
  aux: any[] = [];
  aux2: any[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;
  campos: any = {
    nombre: '',
    especie: '',
    cuidadoPor: '',
    recintoResidencia: '',
    fechaDeLlegada: '',
  }

  constructor(private conexion: AnimalesService) {
    this.conexion.listarAnimal().subscribe(anim => {
      // for (let i = 0; i < anim.length; i++) {
      //   this.fechaSplit = anim[i].fechaDeLlegada.split("-");
      //   anim[i].fechaDeLlegada = this.fechaSplit[2]+"/"+this.fechaSplit[1]+"/"+this.fechaSplit[0];
      // }
      this.animales = anim;
      for (let i = 0; i < anim.length; i++) {
        this.aux2.push(anim[i]);
      }
    });
  }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarAnimal(this.campos);
    this.campos.nombre = '';
    this.campos.especie = '';
    this.campos.cuidadoPor = '';
    this.campos.recintoResidencia = '';
    this.campos.fechaDeLlegada = '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarAnimal(this.item);
  }
  editar(item: any) {
    this.campos = item;
  }
  modificarAnimal() {
    this.conexion.modificarAnimal(this.campos);
  }
  buscar() {
    this.palabra = document.forms[0]["buscar"].value
    this.animales.length = 0;
    for (let i = 0; i < this.aux2.length; i++) {
      this.item = this.aux2[i];
      var nombre = this.item.nombre;
      var especie = this.item.especie;
      var cuidadoPor = this.item.especie;
      var recintoResidencia = this.item.recintoResidencia;
      if (this.palabra.length != 0 && this.aux2.length != 0) {
        if (nombre.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
        especie.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
        cuidadoPor.toLowerCase().search(this.palabra.toLowerCase()) != -1|| 
        recintoResidencia.toLowerCase().search(this.palabra.toLowerCase()) != -1) {
          this.aux.push(this.aux2[i]);
        }
      }
    }
    this.animales = this.aux;
  }
  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  porIdDerecho() {
    this.animales.sort((a: { id: number; }, b: { id: number; }) => {
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
    this.animales.sort((a: { id: number; }, b: { id: number; }) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porNombreDerecho() {
    this.animales.sort((a: { nombre: string; }, b: { nombre: string; }) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porNombreReves() {
    this.animales.sort((a: { nombre: string; }, b: { nombre: string; }) => {
      if (a.nombre > b.nombre) {
        return -1;
      }
      if (a.nombre < b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porEspecieDerecho() {
    this.animales.sort((a: { especie: string; }, b: { especie: string; }) => {
      if (a.especie < b.especie) {
        return -1;
      }
      if (a.especie > b.especie) {
        return 1;
      }
      return 0;
    })
  }
  porEspecieReves() {
    this.animales.sort((a: { especie: string; }, b: { especie: string; }) => {
      if (a.especie > b.especie) {
        return -1;
      }
      if (a.especie < b.especie) {
        return 1;
      }
      return 0;
    })
  }
  porCuidadoPorDerecho() {
    this.animales.sort((a: { cuidadoPor: string; }, b: { cuidadoPor: string; }) => {
      if (a.cuidadoPor < b.cuidadoPor) {
        return -1;
      }
      if (a.cuidadoPor > b.cuidadoPor) {
        return 1;
      }
      return 0;
    })
  }
  porCuidadoPorReves() {
    this.animales.sort((a: { cuidadoPor: string; }, b: { cuidadoPor: string; }) => {
      if (a.cuidadoPor > b.cuidadoPor) {
        return -1;
      }
      if (a.cuidadoPor < b.cuidadoPor) {
        return 1;
      }
      return 0;
    })
  }
  porRecintoResidenciaDerecho() {
    this.animales.sort((a: { recintoResidencia: string; }, b: { recintoResidencia: string; }) => {
      if (a.recintoResidencia < b.recintoResidencia) {
        return -1;
      }
      if (a.recintoResidencia > b.recintoResidencia) {
        return 1;
      }
      return 0;
    })
  }
  porRecintoResidenciaReves() {
    this.animales.sort((a: { recintoResidencia: string; }, b: { recintoResidencia: string; }) => {
      if (a.recintoResidencia > b.recintoResidencia) {
        return -1;
      }
      if (a.recintoResidencia < b.recintoResidencia) {
        return 1;
      }
      return 0;
    })
  }
}
