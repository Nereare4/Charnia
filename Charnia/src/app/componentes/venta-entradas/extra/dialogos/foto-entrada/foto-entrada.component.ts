
import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-foto-entrada',
  templateUrl: './foto-entrada.component.html',
  styleUrls: ['./foto-entrada.component.css']
})
export class FotoEntradaComponent implements OnInit {

  inicio : any;
  cantidad : number = 0;
  fotoPaga : number = 0;

  constructor(public carritoServicio : CarritoService) { }

  aumentar(i : number) {
    this.cantidad = parseInt(document.forms[i]["valor"].value);
    this.cantidad = this.cantidad + 1;
    document.forms[i]["valor"].value = this.cantidad;
    if (i == 4) {
      this.fotoPaga = document.forms[i]["valor"].value * 5
      this.carritoServicio.extraFotoEntrada(document.forms[i]["valor"].value, this.fotoPaga);
    }
  }

  disminuir(i : number) {
    if (parseInt(document.forms[i]["valor"].value) > 0) {
      this.cantidad = parseInt(document.forms[i]["valor"].value);
      this.cantidad = this.cantidad - 1;
      document.forms[i]["valor"].value = this.cantidad;
      if (i == 4) {
        this.fotoPaga = document.forms[i]["valor"].value * 5
        this.carritoServicio.extraFotoEntrada(document.forms[i]["valor"].value, this.fotoPaga);
      }
    }
  }

  ngOnInit(): void {
  }


}
