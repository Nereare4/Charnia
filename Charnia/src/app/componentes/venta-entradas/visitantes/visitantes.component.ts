import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.css']
})
export class VisitantesComponent implements OnInit {

  inicio : any;
  cantidad : number = 0;

  constructor() { }

  aumentar(i : number) {
    this.cantidad = parseInt(document.forms[i]["valor"].value);
    this.cantidad = this.cantidad + 1;
    document.forms[i]["valor"].value = this.cantidad;
  }

  disminuir(i : number) {
    if (parseInt(document.forms[i]["valor"].value) > 0) {
      this.cantidad = parseInt(document.forms[i]["valor"].value);
      this.cantidad = this.cantidad - 1;
      document.forms[i]["valor"].value = this.cantidad;
    }
  }

  ngOnInit(): void {

  }



}
