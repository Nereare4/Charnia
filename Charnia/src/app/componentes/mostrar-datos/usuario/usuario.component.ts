import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;
  item: any;
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
