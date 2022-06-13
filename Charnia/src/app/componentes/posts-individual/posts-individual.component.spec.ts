import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsIndividualComponent } from './posts-individual.component';

describe('PostsIndividualComponent', () => {
  let component: PostsIndividualComponent;
  let fixture: ComponentFixture<PostsIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
