import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actividades-individual',
  templateUrl: './actividades-individual.component.html',
  styleUrls: ['./actividades-individual.component.css']
})
export class ActividadesIndividualComponent implements OnInit {

  individual:any;
  nombre: any;
  // actividad:any;

  constructor(private conexion: ConexionService, private route: ActivatedRoute) {
    this.conexion.listaIndividual().subscribe(indiv => {
      this.individual = indiv;
    })
    // this.conexion.listaActividad().subscribe(activ => {
    //   this.actividad = activ;
    // })

  }
  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get("nombre");
  }
  // public nombre: String = "";

  // constructor(private route: ActivatedRoute){}

  // ngOnInit() {
  //   this.nombre = this.route.snapshot.paramMap.get("nombre");
  // }
}
