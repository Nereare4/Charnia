import { Component, OnInit } from '@angular/core';
import { RecintoService } from './recinto.service';

@Component({
  selector: 'app-recinto',
  templateUrl: './recinto.component.html',
  styleUrls: ['./recinto.component.css']
})
export class RecintoComponent implements OnInit {

  recinto: any;
  item: any;
  campos: any = {
    limpiadoPor: '',
    tamanyo: '',
  }
  constructor(private conexion: RecintoService) {
    this.conexion.listarRecinto().subscribe(recint => {
      this.recinto = recint;
    });
  }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarRecinto(this.campos);
    this.campos.limpiadoPor =  '';
    this.campos.tamanyo =  '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarRecinto(this.item);
  }
  editar(item: any){
      this.campos = item;
  }
  modificarRecinto(){
    this.conexion.modificarRecinto(this.campos);
  }
  porIdDerecho(){
    this.recinto.sort((a: { id: number; },b: { id: number; }) =>{
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
    this.recinto.sort((a: { id: number; },b: { id: number; }) =>{
      if(a.id > b.id){
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })
  }
  porLimpiadoPorDerecho(){
    this.recinto.sort((a: { limpiadoPor: string; },b: { limpiadoPor: string; }) =>{
      if(a.limpiadoPor < b.limpiadoPor){
        return -1;
      }
      if (a.limpiadoPor > b.limpiadoPor) {
        return 1;
      }
      return 0;
    })
  }
  porLimpiadoPorReves(){
    this.recinto.sort((a: { limpiadoPor: string; },b: { limpiadoPor: string; }) =>{
      if(a.limpiadoPor > b.limpiadoPor){
        return -1;
      }
      if (a.limpiadoPor < b.limpiadoPor) {
        return 1;
      }
      return 0;
    })
  }
  porTamanyoDerecho(){
    this.recinto.sort((a: { tamanyo: string; },b: { tamanyo: string; }) =>{
      if(a.tamanyo < b.tamanyo){
        return -1;
      }
      if (a.tamanyo > b.tamanyo) {
        return 1;
      }
      return 0;
    })
  }
  porTamanyoReves(){
    this.recinto.sort((a: { tamanyo: string; },b: { tamanyo: string; }) =>{
      if(a.tamanyo > b.tamanyo){
        return -1;
      }
      if (a.tamanyo < b.tamanyo) {
        return 1;
      }
      return 0;
    })
  }
}
