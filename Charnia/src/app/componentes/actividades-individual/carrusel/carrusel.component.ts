import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {
    }
    transform(value: string) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent implements OnInit {

  individual: any;
  nombre: any;
  imagen: any;
  fotosnum: any[] = [];

  constructor(private conexion: ConexionService, private route: ActivatedRoute, private sanitized: DomSanitizer) {
    this.conexion.listaIndividual().subscribe(indiv => {
      this.individual = indiv;
      this.conexion.imagenes().subscribe(img => {
        this.imagen = img;
        for (let i = 0; i < indiv.length; i++) {
          for (let j = 0; j < img.length; j++) {
            if (indiv[i].idAnimal == img[j].idAnimal) {
              if (this.route.snapshot.paramMap.get("nombre") == indiv[i].nombre) {
                this.fotosnum.push(img[j].imagen)
              }
            }
          }
        }
      })
    })
  }

  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get("nombre");
    this.fotosnum;
  }

}
