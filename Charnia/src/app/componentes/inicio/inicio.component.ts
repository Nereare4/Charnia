import { Component, OnInit } from '@angular/core';
// import {trigger,state,style,animate,transition,} from '@angular/animations';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  // animations:[
  //   trigger('nombre',[
  //     state('void',style({
  //       transform:'transaleX(-100%)',
  //       opacity:0
  //     })),
  //     transition(':enter',[
  //       animate(300,style({
  //         transform:'translatex(0)',
  //         opacity:1
  //       }))
  //     ])
  //   ])
  // ]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
