import { Component, OnInit } from '@angular/core';
import { AutentifService } from "../../servicios/autentif.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public autentifService: AutentifService) { }

  ngOnInit(): void {
    this.autentifService.errorClave = "";
    this.autentifService.errorCorreo = "";
    this.autentifService.errorGenerico = "";
  }

}
