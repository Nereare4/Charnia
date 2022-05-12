import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoZooComponent } from './info-zoo.component';

describe('InfoZooComponent', () => {
  let component: InfoZooComponent;
  let fixture: ComponentFixture<InfoZooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoZooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
