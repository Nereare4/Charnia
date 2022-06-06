import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any[] = [];
  item: any;
  palabra: any;
  aux: any[] = [];
  aux2: any[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;
  campos: any = {
    contrasenya: '',
    correo: '',
    nombre: '',
    apellidos:'',
    tipo: '',
  }
  
  constructor(private conexion: UsuarioService) {
    this.conexion.listaUsuario().subscribe(usu => {
      this.usuario = usu;
      for (let i = 0; i < usu.length; i++) {
        this.aux2.push(usu[i]);
      }
    });
  }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarUsuario(this.campos);
    this.campos.contrasenya =  '';
    this.campos.correo =  '';
    this.campos.nombre =  '';
    this.campos.apellidos =  '';
    this.campos.tipo =  '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarUsuario(this.item);
  }
  editar(item: any){
    this.campos = item;
  }
  modificarUsuario(){
    this.conexion.modificarUsuario(this.campos);
  }
  buscar() {
    this.palabra = document.forms[0]["buscar"].value;
    this.usuario.length = 0;
    for (let i = 0; i < this.aux2.length; i++) {
      this.item = this.aux2[i];
      var contrasenya = this.item.contrasenya;
      var correo = this.item.correo;
      var nombre = this.item.nombre;
      var apellidos = this.item.apellidos;
      var tipo = this.item.tipo;
      if (this.palabra.length != 0 && this.aux2.length != 0) {
        if (contrasenya.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
            correo.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
            nombre.toLowerCase().search(this.palabra.toLowerCase()) != -1 ||
            apellidos.toLowerCase().search(this.palabra.toLowerCase()) != -1 || 
            tipo.toLowerCase().search(this.palabra.toLowerCase()) != -1) {
              this.aux.push(this.aux2[i]);
        }
      }
    }
    this.usuario = this.aux;
  }
  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  porIdDerecho(){
    this.usuario.sort((a: { id: number; },b: { id: number; }) =>{
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
    this.usuario.sort((a: { id: number; },b: { id: number; }) =>{
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
    this.usuario.sort((a: { nombre: string; },b: { nombre: string; }) =>{
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
    this.usuario.sort((a: { nombre: string; },b: { nombre: string; }) =>{
      if(a.nombre > b.nombre){
        return -1;
      }
      if (a.nombre < b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porApellidosDerecho(){
    this.usuario.sort((a: { apellidos: string; },b: { apellidos: string; }) =>{
      if(a.apellidos < b.apellidos){
        return -1;
      }
      if (a.apellidos > b.apellidos) {
        return 1;
      }
      return 0;
    })
  }
  porApellidosReves(){
    this.usuario.sort((a: { apellidos: string; },b: { apellidos: string; }) =>{
      if(a.apellidos > b.apellidos){
        return -1;
      }
      if (a.apellidos < b.apellidos) {
        return 1;
      }
      return 0;
    })
  }
  porTipoDerecho(){
    this.usuario.sort((a: { tipo: string; },b: { tipo: string; }) =>{
      if(a.tipo < b.tipo){
        return -1;
      }
      if (a.tipo > b.tipo) {
        return 1;
      }
      return 0;
    })
  }
  porTipoReves(){
    this.usuario.sort((a: { tipo: string; },b: { tipo: string; }) =>{
      if(a.tipo > b.tipo){
        return -1;
      }
      if (a.tipo < b.tipo) {
        return 1;
      }
      return 0;
    })
  }

}
