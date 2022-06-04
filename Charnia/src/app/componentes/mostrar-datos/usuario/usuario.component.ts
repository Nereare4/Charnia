import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;
  item: any;
  campos: any = {
    contrasenya: '',
    correo: '',
    nombre: '',
    apellidos:'',
    tipo: '',
  }
  
  constructor(private conexion: UsuarioService) {
    this.conexion.listaUsuario().subscribe(usu => {
      this.usuario = usu;
    });
  }

  ngOnInit(): void {
  }
  agregar() {
    this.conexion.agregarUsuario(this.campos);
    this.campos.contrasenya =  '';
    this.campos.correo =  '';
    this.campos.nombre =  '';
    this.campos.apellidos =  '';
    this.campos.tipo =  '';
  }
  eliminar(item: any) {
    this.item = item;
  }
  eliminarDefinitivamente() {
    this.conexion.eliminarUsuario(this.item);
  }
  editar(item: any){
    this.campos = item;
  }
  modificarUsuario(){
    this.conexion.modificarUsuario(this.campos);
  }

}
