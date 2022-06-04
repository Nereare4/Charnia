import { Component, OnInit } from '@angular/core';
import { ImagenesService } from './imagenes.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagen: any;
  item: any;
  campos: any = {
    idAnimal: '',
    imagen: ''
  }

  constructor(private conexion: ImagenesService) {
    this.conexion.listaImagen().subscribe(img => {
      this.imagen = img;
    });
  }

  ngOnInit(): void {
  }

  agregar() {
    this.conexion.agregarImagen(this.campos);
    this.campos.idAnimal = '';
    this.campos.imagen = '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarImagen(this.item);
  }
  editar(item: any) {
    this.campos = item;
  }
  modificarImagen() {
      this.conexion.modificarImagen(this.campos);
  }

}
