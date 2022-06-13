import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoAnimalComponent } from './foto-animal.component';

describe('FotoAnimalComponent', () => {
  let component: FotoAnimalComponent;
  let fixture: ComponentFixture<FotoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
