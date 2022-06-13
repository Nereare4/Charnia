import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-menu-infantil',
  templateUrl: './menu-infantil.component.html',
  styleUrls: ['./menu-infantil.component.css']
})
export class MenuInfantilComponent implements OnInit {

  inicio : any;
  cantidad : number = 0;
  menuInfantilPaga : number = 0;

  constructor(public carritoServicio : CarritoService) { }

  aumentar(i : number) {
    this.cantidad = parseInt(document.forms[i]["valor"].value);
    this.cantidad = this.cantidad + 1;
    document.forms[i]["valor"].value = this.cantidad;
    if (i == 4) {
      this.menuInfantilPaga = document.forms[i]["valor"].value * 10;
      this.carritoServicio.extraMenuInfantil(document.forms[i]["valor"].value, this.menuInfantilPaga);
    }
  }

  disminuir(i : number) {
    if (parseInt(document.forms[i]["valor"].value) > 0) {
      this.cantidad = parseInt(document.forms[i]["valor"].value);
      this.cantidad = this.cantidad - 1;
      document.forms[i]["valor"].value = this.cantidad;
      if (i == 4) {
        this.menuInfantilPaga = document.forms[i]["valor"].value * 10;
        this.carritoServicio.extraMenuInfantil(document.forms[i]["valor"].value, this.menuInfantilPaga);
      }
    }
  }

  ngOnInit(): void {
  }

}
