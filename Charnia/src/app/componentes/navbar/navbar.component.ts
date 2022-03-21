import { Component, OnInit } from '@angular/core';
//import { ConexionService } from 'src/app/servicios/conexion.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [ // aqui es donde se meten las animaciones
    trigger('mostrarLogin', [
      state('oculto',
        style({
          display: 'none',
          height: '0vh'
        })
      ),
      state('visible',
        style({
          display: '',
          height: '100vh'
        })
      ),
      transition('oculto => visible', animate('500ms ease-in')),
      transition('visible => oculto', animate('500ms ease-out'))
    ]),
    trigger('mostrarRegistro', [
      state('oculto',
        style({
          display: 'none',
          height: '0vh'
        })
      ),
      state('visible',
        style({
          display: '',
          height: '100vh'
        })
      ),
      transition('oculto => visible', animate('1000ms ease-in')),
      transition('visible => oculto', animate('500ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  estadoLogin = 'oculto';
  estadoRegistro = 'oculto';

  animLogin() {

    if (this.estadoRegistro == 'visible') {
      this.estadoRegistro = 'oculto';
    } else {
      //this.estadoLogin == 'oculto' ? this.estadoLogin = 'visible' : this.estadoLogin = 'oculto';
      if (this.estadoLogin == 'oculto') {
        this.estadoLogin = 'visible'
      } else {
        this.estadoLogin = 'oculto'
      }
    }
  }

  animRegistro() {
    if (this.estadoLogin == 'visible') {
      this.estadoLogin = 'oculto';
    }
    //this.estadoRegistro == 'oculto' ? this.estadoRegistro = 'visible' : this.estadoRegistro = 'oculto';
    if (this.estadoRegistro == 'oculto') {
      this.estadoRegistro = 'visible'
    } else {
      this.estadoRegistro = 'oculto'
    }
  }

  ngOnInit(): void {
  }

}