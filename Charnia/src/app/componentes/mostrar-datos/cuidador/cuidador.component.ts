import { Component, OnInit } from '@angular/core';
import { CuidadorService } from './cuidador.service';

@Component({
  selector: 'app-cuidador',
  templateUrl: './cuidador.component.html',
  styleUrls: ['./cuidador.component.css']
})
export class CuidadorComponent implements OnInit {

  cuidador: any;
  // fechaSplit: Array<string> = [];
  item: any;
  campos: any = {
    nombre: '',
    apellido: '',
    fechaDeContratacion: '',
  }

  constructor(private conexion: CuidadorService) {
    this.conexion.listaCuidador().subscribe(cuid => {
      this.cuidador = cuid;
    });
  }

  ngOnInit(): void {
    // validacion();
  }

  agregar() {
    this.conexion.agregarCuidador(this.campos);
    this.campos.nombre = '';
    this.campos.apellido = '';
    this.campos.fechaDeContratacion = '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarCuidador(this.item);
  }
  editar(item: any) {
    this.campos = item;
  }
  modificarCuidador() {
    this.conexion.modificarCuidador(this.campos);
  }

}

