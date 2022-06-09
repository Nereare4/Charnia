import { Component, OnInit } from '@angular/core';
import { AutentifService } from "../../servicios/autentif.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public autentifService: AutentifService) { }

  ngOnInit(): void {
    this.autentifService.errorClave = "";
    this.autentifService.errorCorreo = "";
    this.autentifService.errorGenerico = "";
  }

}
