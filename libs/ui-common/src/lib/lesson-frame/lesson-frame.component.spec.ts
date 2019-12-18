import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFrameComponent } from './lesson-frame.component';

describe('LessonFrameComponent', () => {
  let component: LessonFrameComponent;
  let fixture: ComponentFixture<LessonFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
