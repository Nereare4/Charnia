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
  }

  ngOnInit(): void {
  }

}
