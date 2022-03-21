import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesIndividualComponent } from './actividades-individual.component';

describe('ActividadesIndividualComponent', () => {
  let component: ActividadesIndividualComponent;
  let fixture: ComponentFixture<ActividadesIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
