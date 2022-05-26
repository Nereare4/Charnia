import { Component, OnInit } from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';


@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css'],
  host: { '(click)': 'onClick()', 'class': 'day-cell' },
})
export class DiaComponent extends NbCalendarDayCellComponent<Date>{

}
