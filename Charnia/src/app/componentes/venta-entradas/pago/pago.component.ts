import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  campos: any = {
    nombre: '',
    apellidos: '',
    correo: '',
    fecha: '',
    telefono: '',
    numTarjeta: '',
    caducidad: '',
    cvv: '',

  }
  constructor() { }

  ngOnInit(): void {
  }
  pagar() { 
    alert("Enhorabuena, acaba de pagar");
    this.campos.nombre = "";
    this.campos.apellidos = "";
    this.campos.correo = "";
    this.campos.fecha = "";
    this.campos.telefono = "";
    this.campos.numTarjeta = "";
    this.campos.caducidad = "";
    this.campos.cvv = "";
  }
}
