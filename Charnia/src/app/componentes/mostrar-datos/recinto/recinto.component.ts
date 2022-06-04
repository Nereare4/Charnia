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
}
