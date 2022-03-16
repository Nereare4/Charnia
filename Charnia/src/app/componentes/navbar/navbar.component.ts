import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  animal:any;

  constructor(private conexion:ConexionService) { 
    this.conexion.listaAnimal().subscribe(anima=>{
      this.animal = anima;
    })
  }

  ngOnInit(): void {
  }

}
