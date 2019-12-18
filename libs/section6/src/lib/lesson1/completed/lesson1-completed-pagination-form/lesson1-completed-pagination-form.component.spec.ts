import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedPaginationFormComponent } from './lesson1-completed-pagination-form.component';

describe('Lesson1CompletedPaginationFormComponent', () => {
  let component: Lesson1CompletedPaginationFormComponent;
  let fixture: ComponentFixture<Lesson1CompletedPaginationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedPaginationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedPaginationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
