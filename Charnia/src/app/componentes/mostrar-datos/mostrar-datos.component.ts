import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDATOSComponent implements OnInit {

  animal: any;
  cuidador: any;
  recinto: any;
  opinion:any;
  usuario:any;
  individual:any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaAnimales().subscribe(anima => {
      this.animal = anima;
    })
    this.conexion.listaCuidadores().subscribe(cuidado => {
      this.cuidador = cuidado;
    })
    this.conexion.listaRecintos().subscribe(recint => {
      this.recinto = recint;
    })
    this.conexion.listaOpiniones().subscribe(opinio => {
      this.opinion = opinio;
    })
    this.conexion.listaUsuarios().subscribe(usu => {
      this.usuario = usu;
    })
    this.conexion.listaIndividual().subscribe(indiv => {
      this.individual = indiv;
    })
  }

  ngOnInit(): void {
  }

}
