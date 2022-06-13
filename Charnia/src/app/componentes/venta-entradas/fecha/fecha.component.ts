import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css'],
})
export class FechaComponent implements OnInit {

  @Output()fechaHijo = new EventEmitter<string>();

  selected = new Date();
  minFecha = new Date();
  maxFecha = new Date("2030/12/28");
  diaFecha: string = "";

  constructor(date: DateAdapter<Date>, public fechaServicio : CarritoService) {
    date.getFirstDayOfWeek = () => 1;
  }
  ngOnInit(): void {
    this.diaFecha = this.selected.getDate() + "/" + (this.selected.getMonth()+1) + "/" + this.selected.getFullYear();
  }
  onSelect(event: Date) {
    this.selected = new Date(event);
    this.diaFecha = this.selected.getDate() + "/" + (this.selected.getMonth()+1) + "/" + this.selected.getFullYear();
    this.fechaServicio.actualizarFecha(this.diaFecha);
    
  }

}

