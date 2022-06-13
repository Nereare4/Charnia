import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIncluidoComponent } from './todo-incluido.component';

describe('TodoIncluidoComponent', () => {
  let component: TodoIncluidoComponent;
  let fixture: ComponentFixture<TodoIncluidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIncluidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoIncluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
