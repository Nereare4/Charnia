import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaEntradasComponent } from './venta-entradas.component';

describe('VentaEntradasComponent', () => {
  let component: VentaEntradasComponent;
  let fixture: ComponentFixture<VentaEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
