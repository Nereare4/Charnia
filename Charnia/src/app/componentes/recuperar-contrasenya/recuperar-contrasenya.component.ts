import { Component, OnInit } from '@angular/core';
import { AutentifService } from "../../servicios/autentif.service";

@Component({
  selector: 'app-recuperar-contrasenya',
  templateUrl: './recuperar-contrasenya.component.html',
  styleUrls: ['./recuperar-contrasenya.component.css']
})
export class RecuperarContrasenyaComponent implements OnInit {

  constructor(public autentifService: AutentifService) { }

  ngOnInit(): void {
  }

}
