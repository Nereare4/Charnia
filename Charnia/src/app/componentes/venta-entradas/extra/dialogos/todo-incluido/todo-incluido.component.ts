import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';


@Component({
  selector: 'app-todo-incluido',
  templateUrl: './todo-incluido.component.html',
  styleUrls: ['./todo-incluido.component.css']
})
export class TodoIncluidoComponent implements OnInit {

  inicio: any;
  cantidad: number = 0;
  adultoPaga : number = 0;
  infantilPaga : number = 0;

  constructor(public carritoServicio: CarritoService) { }

  ngOnInit(): void {
  }

  aumentar(i: number) {
    this.cantidad = parseInt(document.forms[i]["valor"].value);
    this.cantidad = this.cantidad + 1;
    document.forms[i]["valor"].value = this.cantidad;
    if (i == 4) {
      this.adultoPaga = document.forms[i]["valor"].value * 20;
      this.carritoServicio.extraTodoIncluidoAdulto(document.forms[i]["valor"].value, this.adultoPaga);
    }
    if (i == 5) {
      this.infantilPaga = document.forms[i]["valor"].value * 15;
      this.carritoServicio.extraTodoIncluidoInfantil(document.forms[i]["valor"].value, this.infantilPaga);
    }
  }

  disminuir(i: number) {
    if (parseInt(document.forms[i]["valor"].value) > 0) {
      this.cantidad = parseInt(document.forms[i]["valor"].value);
      this.cantidad = this.cantidad - 1;
      document.forms[i]["valor"].value = this.cantidad;
      if (i == 4) {
        this.adultoPaga = document.forms[i]["valor"].value * 20;
        this.carritoServicio.extraTodoIncluidoAdulto(document.forms[i]["valor"].value, this.adultoPaga);
      }
      if (i == 5) {
        this.infantilPaga = document.forms[i]["valor"].value * 15;
        this.carritoServicio.extraTodoIncluidoInfantil(document.forms[i]["valor"].value, this.infantilPaga);
      }
    }
  }
}
