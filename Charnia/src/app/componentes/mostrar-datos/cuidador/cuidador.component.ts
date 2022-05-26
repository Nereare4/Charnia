import { Component, OnInit } from '@angular/core';
import { CuidadorService } from './cuidador.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Timestamp } from "@firebase/firestore";

@Component({
  selector: 'app-cuidador',
  templateUrl: './cuidador.component.html',
  styleUrls: ['./cuidador.component.css']
})
export class CuidadorComponent implements OnInit {

  cuidador: any;
  campos: any = {
    nombre: '',
    apellido: '',
    fecha: ''
  }
  fechaModif: any;
  fechaNueva: any;
  IPOfecha = new Date();

  constructor(private conexion: CuidadorService, private firebase: AngularFirestoreModule, private firestore: Timestamp) {

    this.conexion.listaCuidador().subscribe(cuid => {
      this.cuidador = cuid;
    })

    // this.fechaModif = this.campos.fecha.split("-");
    // this.fechaNueva = new Date( this.fechaModif[2], this.fechaModif[1] - 1, this.fechaModif[0]);
    // this.campos.fecha = this.fechaNueva;
    // this.IPOfecha.setTime(Date.parse(this.campos.fecha) / 1000);
    // var myTimestamp = firebase.firestore.Timestamp.fromDate(this.IPOfecha.setTime(Date.parse(this.campos.fecha)));
    
    // var myTimestamp = firebase.firestore
    this.fechaModif = this.campos.fecha.getTime();
    this.campos.fecha = this.fechaModif;
    console.log(this.fechaModif);

    // var myDate = "26-02-2012";
    // myDate = myDate.split("-");
    // var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
    // console.log(newDate.getTime());

  }

  ngOnInit(): void {
  }

  agregar() {
    this.conexion.agregarCuidador(this.campos);
    this.campos.nombre = '';
    this.campos.apellido = '';
    this.campos.fecha = '';
  }

}
