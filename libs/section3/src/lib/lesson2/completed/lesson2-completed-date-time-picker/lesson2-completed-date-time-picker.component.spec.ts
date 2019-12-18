import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2CompletedDateTimePickerComponent } from './lesson2-completed-date-time-picker.component';

describe('Lesson2CompletedDateTimePickerComponent', () => {
  let component: Lesson2CompletedDateTimePickerComponent;
  let fixture: ComponentFixture<Lesson2CompletedDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson2CompletedDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2CompletedDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
