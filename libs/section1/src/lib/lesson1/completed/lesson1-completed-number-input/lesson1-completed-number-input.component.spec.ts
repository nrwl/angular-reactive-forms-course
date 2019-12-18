import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedNumberInputComponent } from './lesson1-completed-number-input.component';

describe('Lesson1CompletedNumberInputComponent', () => {
  let component: Lesson1CompletedNumberInputComponent;
  let fixture: ComponentFixture<Lesson1CompletedNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
