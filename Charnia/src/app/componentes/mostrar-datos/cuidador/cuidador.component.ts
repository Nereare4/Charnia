import { Component, OnInit } from '@angular/core';
import { CuidadorService } from './cuidador.service';

@Component({
  selector: 'app-cuidador',
  templateUrl: './cuidador.component.html',
  styleUrls: ['./cuidador.component.css']
})
export class CuidadorComponent implements OnInit {

  cuidador: any;
  // fechaSplit: Array<string> = [];
  item: any;
  campos: any = {
    nombre: '',
    apellido: '',
    fechaDeContratacion: '',
  }

  constructor(private conexion: CuidadorService) {
    this.conexion.listaCuidador().subscribe(cuid => {
      this.cuidador = cuid;
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

