import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  fecha : any;
  adulto: any;
  infantil: any;
  senior: any;
  todoIncluidoAdulto: any;
  todoIncluidoInfantil: any;
  menu: any;
  menuInfantil: any;
  fotoEntrada: any;
  fotoAnimal: any;
  total: number = 0;

  adultoPaga :  number = 0;
  infantilPaga :  number = 0;
  seniorPaga :  number = 0;
  extraAdultoPaga : number = 0;
  extraInfantilPaga : number = 0;
  menuPaga : number = 0;
  menuInfantilPaga : number = 0;
  fotoPaga : number = 0;
  fotoAnimalPaga : number = 0;

  constructor() { 
    
  }
  actualizarFecha(fechaRecibida : any){
    this.fecha = fechaRecibida;
  }
  visitanteAdulto(adultoRecibido : any, adultoPaga : any){
    this.adulto = adultoRecibido;
    this.adultoPaga = adultoPaga;
    this.totalPagar();
  }
  visitanteInfantil(infantilRecibido : any, infantilPaga : any){
    this.infantil = infantilRecibido;
    this.infantilPaga = infantilPaga;
    this.totalPagar();
  }
  visitanteSenior(seniorRecibido : any, seniorPaga : any) {
    this.senior = seniorRecibido;
    this.seniorPaga = seniorPaga;
    this.totalPagar();
  }
  extraTodoIncluidoAdulto(todoIncluidoAdultoRecibido : any, extraAdultoPaga : any){
    this.todoIncluidoAdulto = todoIncluidoAdultoRecibido;
    this.extraAdultoPaga = extraAdultoPaga;
    this.totalPagar();
  }
  extraTodoIncluidoInfantil(todoIncluidoInfantilRecibido : any, extraInfantilPaga : any){
    this.todoIncluidoInfantil = todoIncluidoInfantilRecibido;
    this.extraInfantilPaga = extraInfantilPaga;
    this.totalPagar();
  }
  extraMenu(menuRecibido : any, menuPaga : any){
    this.menu = menuRecibido;
    this.menuPaga = menuPaga;
    this.totalPagar();
  }
  extraMenuInfantil(menuInfantilRecibido : any, menuInfantilPaga: any){
    this.menuInfantil = menuInfantilRecibido;
    this.menuInfantilPaga = menuInfantilPaga;
    this.totalPagar();
  }
  extraFotoEntrada(fotoEntradaRecinido :any, fotoPaga : any){
    this.fotoEntrada = fotoEntradaRecinido;
    this.fotoPaga = fotoPaga;
    this.totalPagar();
  }
  extraFotoAnimal(fotoAnimalRecibida : any, fotoAnimalPaga : any){
    this.fotoAnimal = fotoAnimalRecibida;
    this.fotoAnimalPaga = fotoAnimalPaga;
    this.totalPagar();
  }
  totalPagar(){
    this.total = this.adultoPaga + this.infantilPaga + this.seniorPaga + 
                  this.extraAdultoPaga + this.extraInfantilPaga + this.menuPaga + 
                  this.menuInfantilPaga + this.fotoPaga + this.fotoAnimalPaga; 
  }
}
