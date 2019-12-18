import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedDateTimeRangePickerComponent } from './lesson1-completed-date-time-range-picker.component';

describe('Lesson1CompletedDateTimeRangePickerComponent', () => {
  let component: Lesson1CompletedDateTimeRangePickerComponent;
  let fixture: ComponentFixture<Lesson1CompletedDateTimeRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedDateTimeRangePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedDateTimeRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
