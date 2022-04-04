import { Component, OnInit } from '@angular/core';
import { AutentifService } from "../../servicios/autentif.service";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(public autentifService: AutentifService) {}

  ngOnInit(): void {
  }

}
