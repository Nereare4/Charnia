import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDATOSComponent } from './mostrar-datos.component';

describe('MostrarDATOSComponent', () => {
  let component: MostrarDATOSComponent;
  let fixture: ComponentFixture<MostrarDATOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDATOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDATOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
