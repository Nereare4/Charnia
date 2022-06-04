import { Component, OnInit } from '@angular/core';
import { ActividadIndivService } from './actividad-indiv.service';

@Component({
  selector: 'app-actividad-indiv',
  templateUrl: './actividad-indiv.component.html',
  styleUrls: ['./actividad-indiv.component.css']
})
export class ActividadIndivComponent implements OnInit {

  actividadIndividual: any;
  item: any;
  campos: any = {
    descripcion: '',
    diario: '',
    finsemana: '',
    imagen: '',
    nombre: '',
    titulo: '',
    tituloCarta: '',
  }

  constructor(private conexion: ActividadIndivService) {
    this.conexion.listaActividadIndividual().subscribe(indiv => {
      this.actividadIndividual = indiv;
    });
   }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarActividadIndividual(this.campos);
    this.campos.descripcion =  '';
    this.campos.diario =  '';
    this.campos.finsemana =  '';
    this.campos.imagen =  '';
    this.campos.nombre =  '';
    this.campos.titulo =  '';
    this.campos.tituloCarta =  '';
  }
  eliminar(item : any){
    this.item = item;
  }
  eliminarDefinitivamente(){
    this.conexion.eliminarActividadIndividual(this.item);
  }
  editar(item: any){
    this.campos = item;
  }
  modificarActividad(){
    this.conexion.modificarActividadIndividual(this.campos);
  }
  porIdDerecho(){
    this.actividadIndividual.sort((a: { id: number; },b: { id: number; }) =>{
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
    this.actividadIndividual.sort((a: { id: number; },b: { id: number; }) =>{
      if(a.id > b.id){
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porRutaDerecho(){
    this.actividadIndividual.sort((a: { nombre: string; },b: { nombre: string; }) =>{
      if(a.nombre < b.nombre){
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porRutaReves(){
    this.actividadIndividual.sort((a: { nombre: string; },b: { nombre: string; }) =>{
      if(a.nombre > b.nombre){
        return -1;
      }
      if (a.nombre < b.nombre) {
        return 1;
      }
      return 0;
    })
  }
  porTituloDerecho(){
    this.actividadIndividual.sort((a: { titulo: string; },b: { titulo: string; }) =>{
      if(a.titulo < b.titulo){
        return -1;
      }
      if (a.titulo > b.titulo) {
        return 1;
      }
      return 0;
    })
  }
  porTituloReves(){
    this.actividadIndividual.sort((a: { titulo: string; },b: { titulo: string; }) =>{
      if(a.titulo > b.titulo){
        return -1;
      }
      if (a.titulo < b.titulo) {
        return 1;
      }
      return 0;
    })
  }
  porTituloCartaDerecho(){
    this.actividadIndividual.sort((a: { tituloCarta: string; },b: { tituloCarta: string; }) =>{
      if(a.tituloCarta < b.tituloCarta){
        return -1;
      }
      if (a.tituloCarta > b.tituloCarta) {
        return 1;
      }
      return 0;
    })
  }
  porTituloCartaReves(){
    this.actividadIndividual.sort((a: { tituloCarta: string; },b: { tituloCarta: string; }) =>{
      if(a.tituloCarta > b.tituloCarta){
        return -1;
      }
      if (a.tituloCarta < b.tituloCarta) {
        return 1;
      }
      return 0;
    })
  }

}
