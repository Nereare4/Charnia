import { Component, OnInit } from '@angular/core';
import { AnimalesService } from './animales.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: any;
  // fechaSplit: Array<string> = [];
  item: any;
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
  eliminar(item : any){
    this.item = item;
  }
  eliminarDefinitivamente(){
    this.conexion.eliminarAnimal(this.item);
  }
  editar(item: any){
    this.campos = item;
  }
  modificarAnimal(){
    this.conexion.modificarAnimal(this.campos);
  }
  porIdDerecho(){
    this.animales.sort((a: { id: number; },b: { id: number; }) =>{
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
    this.animales.sort((a: { id: number; },b: { id: number; }) =>{
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
    this.animales.sort((a: { nombre: string; },b: { nombre: string; }) =>{
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
    this.animales.sort((a: { nombre: string; },b: { nombre: string; }) =>{
      if(a.nombre > b.nombre){
        return -1;
      }
      if (a.nombre < b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porEspecieDerecho(){
    this.animales.sort((a: { especie: string; },b: { especie: string; }) =>{
      if(a.especie < b.especie){
        return -1;
      }
      if (a.especie > b.especie) {
        return 1;
      }
      return 0;
    })
  }
  porEspecieReves(){
    this.animales.sort((a: { especie: string; },b: { especie: string; }) =>{
      if(a.especie > b.especie){
        return -1;
      }
      if (a.especie < b.especie) {
        return 1;
      }
      return 0;
    })
  }
  porCuidadoPorDerecho(){
    this.animales.sort((a: { cuidadoPor: string; },b: { cuidadoPor: string; }) =>{
      if(a.cuidadoPor < b.cuidadoPor){
        return -1;
      }
      if (a.cuidadoPor > b.cuidadoPor) {
        return 1;
      }
      return 0;
    })
  }
  porCuidadoPorReves(){
    this.animales.sort((a: { cuidadoPor: string; },b: { cuidadoPor: string; }) =>{
      if(a.cuidadoPor > b.cuidadoPor){
        return -1;
      }
      if (a.cuidadoPor < b.cuidadoPor) {
        return 1;
      }
      return 0;
    })
  }
  porRecintoResidenciaDerecho(){
    this.animales.sort((a: { recintoResidencia: string; },b: { recintoResidencia: string; }) =>{
      if(a.recintoResidencia < b.recintoResidencia){
        return -1;
      }
      if (a.recintoResidencia > b.recintoResidencia) {
        return 1;
      }
      return 0;
    })
  }
  porRecintoResidenciaReves(){
    this.animales.sort((a: { recintoResidencia: string; },b: { recintoResidencia: string; }) =>{
      if(a.recintoResidencia > b.recintoResidencia){
        return -1;
      }
      if (a.recintoResidencia < b.recintoResidencia) {
        return 1;
      }
      return 0;
    })
  }
}
