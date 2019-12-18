import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedOtherControlsComponent } from './lesson1-completed-other-controls.component';

describe('Lesson1CompletedOtherControlsComponent', () => {
  let component: Lesson1CompletedOtherControlsComponent;
  let fixture: ComponentFixture<Lesson1CompletedOtherControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedOtherControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedOtherControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
