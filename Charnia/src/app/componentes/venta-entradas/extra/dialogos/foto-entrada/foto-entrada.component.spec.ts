import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoEntradaComponent } from './foto-entrada.component';

describe('FotoEntradaComponent', () => {
  let component: FotoEntradaComponent;
  let fixture: ComponentFixture<FotoEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
