import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

// import {trigger,state,style,animate,transition,} from '@angular/animations';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  // animations:[
  //   trigger('nombre',[
  //     state('void',style({
  //       transform:'transaleX(-100%)',
  //       opacity:0
  //     })),
  //     transition(':enter',[
  //       animate(300,style({
  //         transform:'translatex(0)',
  //         opacity:1
  //       }))
  //     ])
  //   ])
  // ]
})
export class InicioComponent implements OnInit {
  opinion:any;
  usuario:any;

   constructor(private conexion: ConexionService) {
    this.conexion.listaOpiniones().subscribe(opinio => {
      this.opinion = opinio;
    })
    this.conexion.listaUsuarios().subscribe(usu => {
      this.usuario = usu;
    })
  }

  ngOnInit(): void {
  }

}
