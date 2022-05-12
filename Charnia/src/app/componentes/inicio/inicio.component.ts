import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  opinion:any;
  usuario:any;
  individual:any;
  nombre: any;
  ruta: string[]=[];
  arrayOpinion: any[] = [];
  // otroArray:

   constructor(private conexion: ConexionService, private route: ActivatedRoute) {
    this.conexion.listaOpiniones().subscribe(opinio => {
      this.opinion = opinio;
      for (let i = 0; i < opinio.length; i++) {
        if (opinio[i].valoracion >= 4 && this.arrayOpinion.length < 3) {
          this.arrayOpinion.push(opinio[i]);
        }
      }
    })
    this.conexion.listaUsuarios().subscribe(usu => {
      this.usuario = usu;
    })
    this.conexion.listaIndividual().subscribe(indiv => {
      this.individual = indiv;
      for (let i = 0; i < indiv.length; i++) {
        this.ruta.push(indiv[i].nombre);
      }
    })
  }

  ngOnInit(): void {
    this.nombre = this.route.snapshot.paramMap.get("nombre");
    this.ruta;
    this.arrayOpinion;
    console.log(this.arrayOpinion)
  }

}
