import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  inicio : any;
  cantidad : number = 0;
  menuPaga : number = 0;

  constructor(public carritoServicio : CarritoService) { }

  aumentar(i : number) {
    this.cantidad = parseInt(document.forms[i]["valor"].value);
    this.cantidad = this.cantidad + 1;
    document.forms[i]["valor"].value = this.cantidad;
    if (i == 4) {
      this.menuPaga = document.forms[i]["valor"].value * 15;
      this.carritoServicio.extraMenu(document.forms[i]["valor"].value, this.menuPaga);
    }
  }

  disminuir(i : number) {
    if (parseInt(document.forms[i]["valor"].value) > 0) {
      this.cantidad = parseInt(document.forms[i]["valor"].value);
      this.cantidad = this.cantidad - 1;
      document.forms[i]["valor"].value = this.cantidad;
      if (i == 4) {
        this.menuPaga = document.forms[i]["valor"].value * 15;
        this.carritoServicio.extraMenu(document.forms[i]["valor"].value, this.menuPaga);
      }
    }
  }

  ngOnInit(): void {
  }

}
