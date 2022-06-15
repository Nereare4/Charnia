import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuarioDatos: any;
  usuariosData: any[] = []; 
  mostrarAccesoGestion: any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaUsuarios().subscribe(usuarios => {
      usuarios.forEach(usuariooo => {
        
      this.usuariosData.push(usuariooo);
      });

      this.usuarioDatos = JSON.parse(localStorage.getItem('usuario')!);

    for (let i = 0; i < this.usuariosData.length; i++) {
      //this.usuarioDatos = localStorage.getItem('usuario');

      if (this.usuarioDatos != null && this.usuarioDatos.email == this.usuariosData[i].correo && this.usuariosData[i].tipo == 'admin') {
        this.mostrarAccesoGestion = true;
        break;
      } else {
        this.mostrarAccesoGestion = false;
      }
    }
    })
    
    
  }

  ngOnInit(): void {
    
  }

  prueba() {
    
  }
}