import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifCorreoComponent } from './verif-correo.component';

describe('VerifCorreoComponent', () => {
  let component: VerifCorreoComponent;
  let fixture: ComponentFixture<VerifCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
