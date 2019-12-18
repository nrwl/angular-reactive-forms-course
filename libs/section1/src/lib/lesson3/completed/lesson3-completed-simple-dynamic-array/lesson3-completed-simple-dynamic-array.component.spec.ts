import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3CompletedSimpleDynamicArrayComponent } from './lesson3-completed-simple-dynamic-array.component';

describe('Lesson3CompletedSimpleDynamicArrayComponent', () => {
  let component: Lesson3CompletedSimpleDynamicArrayComponent;
  let fixture: ComponentFixture<Lesson3CompletedSimpleDynamicArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3CompletedSimpleDynamicArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3CompletedSimpleDynamicArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
