import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';


@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.css']
})
export class VisitantesComponent implements OnInit {

  inicio : any;
  cantidad : number = 0;
  adultoPaga : number = 0;
  infantilPaga : number = 0;
  seniorPaga : number = 0;

  constructor(public carritoServicio : CarritoService) { }

  aumentar(i : number) {
    this.cantidad = parseInt(document.forms[i]["valor"].value);
    this.cantidad = this.cantidad + 1;
    document.forms[i]["valor"].value = this.cantidad;
    if(i==0){
      this.adultoPaga = document.forms[i]["valor"].value * 20;
      this.carritoServicio.visitanteAdulto(document.forms[i]["valor"].value, this.adultoPaga);
    }
    if(i==1){
      this.infantilPaga = document.forms[i]["valor"].value * 15.5;
      this.carritoServicio.visitanteInfantil(document.forms[i]["valor"].value, this.infantilPaga);
    }
    if(i==2){
      this.seniorPaga = document.forms[i]["valor"].value * 17;
      this.carritoServicio.visitanteSenior(document.forms[i]["valor"].value, this.seniorPaga);
    }
  }

  disminuir(i : number) {
    if (parseInt(document.forms[i]["valor"].value) > 0) {
      this.cantidad = parseInt(document.forms[i]["valor"].value);
      this.cantidad = this.cantidad - 1;
      document.forms[i]["valor"].value = this.cantidad;
      if(i==0){
        this.adultoPaga = document.forms[i]["valor"].value * 20;
      this.carritoServicio.visitanteAdulto(document.forms[i]["valor"].value, this.adultoPaga);
      }
      if(i==1){
        this.infantilPaga = document.forms[i]["valor"].value * 15.5;
        this.carritoServicio.visitanteInfantil(document.forms[i]["valor"].value, this.infantilPaga);
      }
      if(i==2){
        this.seniorPaga = document.forms[i]["valor"].value * 17;
        this.carritoServicio.visitanteSenior(document.forms[i]["valor"].value, this.seniorPaga);
      }
    }
  }

  ngOnInit(): void {

  }

}
