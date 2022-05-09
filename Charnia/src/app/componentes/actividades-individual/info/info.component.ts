import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  individual: any;
  nombre: any;
  descripcion: string[] = [];

  constructor(private conexion: ConexionService, private route: ActivatedRoute) {
    this.conexion.listaIndividual().subscribe(indiv => {
      this.individual = indiv;
      for (let i = 0; i < indiv.length; i++) {
          this.descripcion.push(indiv[i].descripcion);
      }
    })
  }
  
  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get("nombre");
    this.descripcion;
  }
}
