import { Component, OnInit } from '@angular/core';
import { DiaComponent } from './dia/dia.component';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css'],
  entryComponents: [DiaComponent],
})
export class FechaComponent implements OnInit {

  date: any;
  date2: any;

  dayCellComponent = DiaComponent;

  constructor() {
    // console.log(this.date.getDate())
    // this.date.getDate();
    this.date = new Date();
    this.date2 = new Date();
    // console.log(this.date + "---------------------------" + this.date2)
  }
  ngOnInit(): void {

  }

}

