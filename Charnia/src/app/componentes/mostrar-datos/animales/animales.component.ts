import { Component, OnInit } from '@angular/core';
import { AnimalesService } from './animales.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: any;
  // fechaSplit: Array<string> = [];
  item: any;
  campos: any = {
    nombre: '',
    especie: '',
    cuidadoPor: '',
    recintoResidencia: '',
    fechaDeLlegada: '',
  }

  constructor(private conexion: AnimalesService) { 
    this.conexion.listarAnimal().subscribe(anim => {
      // for (let i = 0; i < anim.length; i++) {
      //   this.fechaSplit = anim[i].fechaDeLlegada.split("-");
      //   anim[i].fechaDeLlegada = this.fechaSplit[2]+"/"+this.fechaSplit[1]+"/"+this.fechaSplit[0];
      // }
      this.animales = anim;     
    });
  }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarAnimal(this.campos);
    this.campos.nombre = '';
    this.campos.especie = '';
    this.campos.cuidadoPor = '';
    this.campos.recintoResidencia = '';
    this.campos.fechaDeLlegada = '';
 }
  eliminar(item : any){
    this.item = item;
  }
  eliminarDefinitivamente(){
    this.conexion.eliminarAnimal(this.item);
  }
  editar(item: any){
    this.campos = item;
  }
  modificarAnimal(){
    this.conexion.modificarAnimal(this.campos);
  }

}
