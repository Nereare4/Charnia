import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  individual: any;
  nombre: any;
  ruta: string[] = [];

  constructor(private conexion: ConexionService, private route: ActivatedRoute, private router: Router) {
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
  envioRuta(rut: string) {
    let currentUrl = "/actividad/" + rut;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
