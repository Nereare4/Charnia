import { Component, OnInit } from '@angular/core';
import { ActividadIndivService } from './actividad-indiv.service';

@Component({
  selector: 'app-actividad-indiv',
  templateUrl: './actividad-indiv.component.html',
  styleUrls: ['./actividad-indiv.component.css']
})
export class ActividadIndivComponent implements OnInit {

  actividadIndividual: any;
  item: any;
  campos: any = {
    descripcion: '',
    diario: '',
    finsemana: '',
    imagen: '',
    nombre: '',
    titulo: '',
    tituloCarta: '',
  }

  constructor(private conexion: ActividadIndivService) {
    this.conexion.listaActividadIndividual().subscribe(indiv => {
      this.actividadIndividual = indiv;
    });
   }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarActividadIndividual(this.campos);
    this.campos.descripcion =  '';
    this.campos.diario =  '';
    this.campos.finsemana =  '';
    this.campos.imagen =  '';
    this.campos.nombre =  '';
    this.campos.titulo =  '';
    this.campos.tituloCarta =  '';
  }
  eliminar(item : any){
    this.item = item;
  }
  eliminarDefinitivamente(){
    this.conexion.eliminarActividadIndividual(this.item);
  }
  editar(item: any){
    this.campos = item;
  }
  modificarActividad(){
    this.conexion.modificarActividadIndividual(this.campos);
  }

}
