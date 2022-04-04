import { Component, OnInit } from '@angular/core';
import { AutentifService } from "../../servicios/autentif.service";

@Component({
  selector: 'app-verif-correo',
  templateUrl: './verif-correo.component.html',
  styleUrls: ['./verif-correo.component.css']
})
export class VerifCorreoComponent implements OnInit {

  constructor(public autentifService: AutentifService) { }

  ngOnInit(): void {
  }

}
