import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-venta-entradas',
  templateUrl: './venta-entradas.component.html',
  styleUrls: ['./venta-entradas.component.css']
})
export class VentaEntradasComponent implements OnInit {

  fecha : any;
  visitantes : any;
  total : number = 0;
  constructor(public carritoService : CarritoService) { 
    
  }

  ngOnInit(): void {
    // this.pagar();
    this.carritoService.fecha = "";
    this.carritoService.adulto = "";
    this.carritoService.infantil = "";
    this.carritoService.senior = "";
    this.carritoService.todoIncluidoAdulto = "";
    this.carritoService.todoIncluidoInfantil = "";
    this.carritoService.menu = "";
    this.carritoService.menuInfantil = "";
    this.carritoService.fotoEntrada = "";
    this.carritoService.fotoAnimal = "";
  }
  // pagar(){
  //   this.total = (
  //   (this.carritoService.adulto * 20) + 
  //   (this.carritoService.infantil * 15.5) + 
  //   (this.carritoService.senior * 17) + 
  //   (this.carritoService.todoIncluidoAdulto * 20) + 
  //   (this.carritoService.todoIncluidoInfantil * 15) +
  //   (this.carritoService.menu * 15) + 
  //   (this.carritoService.menuInfantil * 10) + 
  //   (this.carritoService.fotoEntrada * 5) + 
  //   (this.carritoService.fotoAnimal * 12) );

  // }

}
