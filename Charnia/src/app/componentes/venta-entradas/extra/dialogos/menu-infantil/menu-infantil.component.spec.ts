import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInfantilComponent } from './menu-infantil.component';

describe('MenuInfantilComponent', () => {
  let component: MenuInfantilComponent;
  let fixture: ComponentFixture<MenuInfantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInfantilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
