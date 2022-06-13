import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts-individual',
  templateUrl: './posts-individual.component.html',
  styleUrls: ['./posts-individual.component.css']
})
export class PostsIndividualComponent implements OnInit {

  conservacion : any;
  nombre: any;
  ruta: string[]=[];

  constructor(private conexion: ConexionService, private route: ActivatedRoute) {

    this.conexion.listaConservacion().subscribe(con => {
      this.conservacion = con;
      for (let i = 0; i < con.length; i++) {
        this.ruta.push(con[i].ruta);
      }
    })
  }

  ngOnInit(): void {
    this.nombre = this.route.snapshot.paramMap.get("nombre");
  }

}
