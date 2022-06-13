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

  constructor(private conexion: ConexionService, private route: ActivatedRoute) {

  }
  ngOnInit() {

  }


}
