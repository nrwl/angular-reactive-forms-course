import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedNumberPickerComponent } from './lesson1-completed-number-picker.component';

describe('Lesson1CompletedNumberPickerComponent', () => {
  let component: Lesson1CompletedNumberPickerComponent;
  let fixture: ComponentFixture<Lesson1CompletedNumberPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedNumberPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedNumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
