import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  conservacion : any;
  constructor(private conexion: ConexionService) {

    this.conexion.listaConservacion().subscribe(con => {
      this.conservacion = con;
    })
  }

  ngOnInit(): void {
  }

}
