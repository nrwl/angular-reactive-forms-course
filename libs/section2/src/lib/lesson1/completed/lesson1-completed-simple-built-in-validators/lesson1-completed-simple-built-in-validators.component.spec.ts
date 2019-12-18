import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedSimpleBuiltInValidatorsComponent } from './lesson1-completed-simple-built-in-validators.component';

describe('Lesson1CompletedSimpleBuiltInValidatorsComponent', () => {
  let component: Lesson1CompletedSimpleBuiltInValidatorsComponent;
  let fixture: ComponentFixture<Lesson1CompletedSimpleBuiltInValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedSimpleBuiltInValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedSimpleBuiltInValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
