import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedToggleFormComponent } from './lesson1-completed-toggle-form.component';

describe('Lesson1CompletedToggleFormComponent', () => {
  let component: Lesson1CompletedToggleFormComponent;
  let fixture: ComponentFixture<Lesson1CompletedToggleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedToggleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedToggleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
