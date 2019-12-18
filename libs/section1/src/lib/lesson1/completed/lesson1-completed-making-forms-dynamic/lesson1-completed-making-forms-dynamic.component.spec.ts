import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedMakingFormsDynamicComponent } from './lesson1-completed-making-forms-dynamic.component';

describe('Lesson1CompletedMakingFormsDynamicComponent', () => {
  let component: Lesson1CompletedMakingFormsDynamicComponent;
  let fixture: ComponentFixture<Lesson1CompletedMakingFormsDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedMakingFormsDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedMakingFormsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
