import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedTextInputComponent } from './lesson1-completed-text-input.component';

describe('Lesson1CompletedTextInputComponent', () => {
  let component: Lesson1CompletedTextInputComponent;
  let fixture: ComponentFixture<Lesson1CompletedTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
