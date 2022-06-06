import { Component, OnInit } from '@angular/core';
import { DiaComponent } from './dia/dia.component';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css'],
  entryComponents: [DiaComponent],
})
export class FechaComponent implements OnInit {

  selected: Date | null | undefined;

  constructor() {
    
  }
  ngOnInit(): void {

  }

}

