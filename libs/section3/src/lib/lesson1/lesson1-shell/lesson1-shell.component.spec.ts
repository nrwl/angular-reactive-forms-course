import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1ShellComponent } from './lesson1-shell.component';

describe('Lesson1ShellComponent', () => {
  let component: Lesson1ShellComponent;
  let fixture: ComponentFixture<Lesson1ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1ShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
