import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadIndivComponent } from './actividad-indiv.component';

describe('ActividadIndivComponent', () => {
  let component: ActividadIndivComponent;
  let fixture: ComponentFixture<ActividadIndivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadIndivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadIndivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
