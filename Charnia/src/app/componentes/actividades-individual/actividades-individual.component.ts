import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-actividades-individual',
  templateUrl: './actividades-individual.component.html',
  styleUrls: ['./actividades-individual.component.css']
})
export class ActividadesIndividualComponent implements OnInit {

  individual: any;
  nombre: any;
  ruta: string[]=[];
  state: string = "inactive"; //PROVISIONAL ES PARA ANIMACION DE CARD

  constructor(private conexion: ConexionService, private route: ActivatedRoute) {
    this.conexion.listaIndividual().subscribe(indiv => {
      this.individual = indiv;
      for (let i = 0; i < indiv.length; i++) {
        this.ruta.push(indiv[i].nombre);
      }
    })
  }
  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get("nombre");
    this.ruta;
  }
  // verde(){
  //   this.state = this.state === "active" ? "inactive" : "active";
  // }
  
  

}
