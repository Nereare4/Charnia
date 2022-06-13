import { Component, OnInit } from '@angular/core';
import { RecintoService } from './recinto.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-recinto',
  templateUrl: './recinto.component.html',
  styleUrls: ['./recinto.component.css']
})
export class RecintoComponent implements OnInit {

  recinto: any[] = [];
  item: any;
  palabra: any;
  aux: any[] = [];
  aux2: any[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;
  campos: any = {
    limpiadoPor: '',
    tamanyo: '',
  }
  constructor(private conexion: RecintoService) {
    this.conexion.listarRecinto().subscribe(recint => {
      this.recinto = recint;
      for (let i = 0; i < recint.length; i++) {
        this.aux2.push(recint[i]);
      }
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
  // MIRAR EL TAMAÑO!!!!
  buscar() {
    this.palabra = document.forms[0]["buscar"].value;
    this.recinto.length = 0;
    for (let i = 0; i < this.aux2.length; i++) {
      this.item = this.aux2[i];
      var limpiadoPor = this.item.limpiadoPor;
      var tamanyo = this.item.tamanyo;
      if (this.palabra.length != 0 && this.aux2.length != 0) {
        if (limpiadoPor.toLowerCase().search(this.palabra.toLowerCase()) != -1 || tamanyo == this.palabra) {
          this.aux.push(this.aux2[i]);
        }
      }
    }
    this.recinto = this.aux;
  }
  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
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
