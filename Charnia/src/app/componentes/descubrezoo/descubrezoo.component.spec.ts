import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubrezooComponent } from './descubrezoo.component';

describe('DescubrezooComponent', () => {
  let component: DescubrezooComponent;
  let fixture: ComponentFixture<DescubrezooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescubrezooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubrezooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
