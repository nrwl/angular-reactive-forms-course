import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickerFormComponent } from './date-range-picker-form.component';

describe('DateRangePickerFormComponent', () => {
  let component: DateRangePickerFormComponent;
  let fixture: ComponentFixture<DateRangePickerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangePickerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangePickerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
