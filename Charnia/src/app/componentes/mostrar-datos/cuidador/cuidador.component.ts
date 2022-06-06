import { Component, OnInit } from '@angular/core';
import { CuidadorService } from './cuidador.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cuidador',
  templateUrl: './cuidador.component.html',
  styleUrls: ['./cuidador.component.css']
})
export class CuidadorComponent implements OnInit {

  cuidador: any[] = [];
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
    apellido: '',
    fechaDeContratacion: '',
  }

  constructor(private conexion: CuidadorService) {
    this.conexion.listaCuidador().subscribe(cuid => {
      this.cuidador = cuid;
      for (let i = 0; i < cuid.length; i++) {
        this.aux2.push(cuid[i]);
      }
    });
  }

  ngOnInit(): void {
    // validacion();
  }

  agregar() {
    this.conexion.agregarCuidador(this.campos);
    this.campos.nombre = '';
    this.campos.apellido = '';
    this.campos.fechaDeContratacion = '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarCuidador(this.item);
  }
  editar(item: any) {
    this.campos = item;
  }
  modificarCuidador() {
    this.conexion.modificarCuidador(this.campos);
  }
  buscar() {
    this.palabra = document.forms[0]["buscar"].value
    this.cuidador.length = 0;
    for (let i = 0; i < this.aux2.length; i++) {
      this.item = this.aux2[i];
      var nombre = this.item.nombre;
      var apellido = this.item.apellido;
      if (this.palabra.length != 0 && this.aux2.length != 0) {
        if (nombre.toLowerCase().search(this.palabra.toLowerCase()) != -1 || apellido.toLowerCase().search(this.palabra.toLowerCase()) != -1) {
          this.aux.push(this.aux2[i]);
        }
      }
    }
    this.cuidador = this.aux;
  }
  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  porIdDerecho(){
    this.cuidador.sort((a: { id: number; },b: { id: number; }) =>{
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
    this.cuidador.sort((a: { id: number; },b: { id: number; }) =>{
      if(a.id > b.id){
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porNombreDerecho(){
    this.cuidador.sort((a: { nombre: string; },b: { nombre: string; }) =>{
      if(a.nombre < b.nombre){
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porNombreReves(){
    this.cuidador.sort((a: { nombre: string; },b: { nombre: string; }) =>{
      if(a.nombre > b.nombre){
        return -1;
      }
      if (a.nombre < b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porApellidoDerecho(){
    this.cuidador.sort((a: { apellido: string; },b: { apellido: string; }) =>{
      if(a.apellido < b.apellido){
        return -1;
      }
      if (a.apellido > b.apellido) {
        return 1;
      }
      return 0;
    })
  }
  porApellidoReves(){
    this.cuidador.sort((a: { apellido: string; },b: { apellido: string; }) =>{
      if(a.apellido > b.apellido){
        return -1;
      }
      if (a.apellido < b.apellido) {
        return 1;
      }
      return 0;
    })
  }
}

