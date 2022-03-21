import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';


@Component({
  selector: 'app-actividades-individual',
  templateUrl: './actividades-individual.component.html',
  styleUrls: ['./actividades-individual.component.css']
})
export class ActividadesIndividualComponent implements OnInit {

  individual:any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaIndividual().subscribe(indiv => {
      this.individual = indiv;
    })
  }
  ngOnInit(): void {
  }

}
