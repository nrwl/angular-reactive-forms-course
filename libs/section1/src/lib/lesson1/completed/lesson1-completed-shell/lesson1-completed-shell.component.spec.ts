import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedShellComponent } from './lesson1-completed-shell.component';

describe('Lesson1CompletedShellComponent', () => {
  let component: Lesson1CompletedShellComponent;
  let fixture: ComponentFixture<Lesson1CompletedShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
