import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-foto-animal',
  templateUrl: './foto-animal.component.html',
  styleUrls: ['./foto-animal.component.css']
})
export class FotoAnimalComponent implements OnInit {

  inicio : any;
  cantidad : number = 0;
  fotoAnimalPaga : number = 0;

  constructor(public carritoServicio : CarritoService) { }

  aumentar(i : number) {
    this.cantidad = parseInt(document.forms[i]["valor"].value);
    this.cantidad = this.cantidad + 1;
    document.forms[i]["valor"].value = this.cantidad;
    if (i == 4) {
      this.fotoAnimalPaga = document.forms[i]["valor"].value * 12;
      this.carritoServicio.extraFotoAnimal(document.forms[i]["valor"].value, this.fotoAnimalPaga);
    }
  }

  disminuir(i : number) {
    if (parseInt(document.forms[i]["valor"].value) > 0) {
      this.cantidad = parseInt(document.forms[i]["valor"].value);
      this.cantidad = this.cantidad - 1;
      document.forms[i]["valor"].value = this.cantidad;
      if (i == 4) {
        this.fotoAnimalPaga = document.forms[i]["valor"].value * 12;
        this.carritoServicio.extraFotoAnimal(document.forms[i]["valor"].value, this.fotoAnimalPaga);
      }
    }
  }

  ngOnInit(): void {
  }

}
