import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FotoAnimalComponent } from './dialogos/foto-animal/foto-animal.component';
import { FotoEntradaComponent } from './dialogos/foto-entrada/foto-entrada.component';
import { MenuInfantilComponent } from './dialogos/menu-infantil/menu-infantil.component';
import { MenuComponent } from './dialogos/menu/menu.component';
import { TodoIncluidoComponent } from './dialogos/todo-incluido/todo-incluido.component';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  todoIncluido: number = 0;
  menu: number = 0;
  menuInfantil: number = 0;
  fotoEntrada: number = 0;
  fotoAnimal: number = 0;

  inicio : any;
  cantidad : number = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirTodoIncluido(){
    this.dialog.open(TodoIncluidoComponent);
  }
  abrirMenu(){
    this.dialog.open(MenuComponent);
  }
  abrirMenuInfantil(){
    this.dialog.open(MenuInfantilComponent);
  }
  abrirFotoEntrada(){
    this.dialog.open(FotoEntradaComponent);
  }
  abrirFotoAnimal(){
    this.dialog.open(FotoAnimalComponent);
  }
}
