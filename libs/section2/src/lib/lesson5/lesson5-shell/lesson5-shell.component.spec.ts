import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5ShellComponent } from './lesson5-shell.component';

describe('Lesson5ShellComponent', () => {
  let component: Lesson5ShellComponent;
  let fixture: ComponentFixture<Lesson5ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson5ShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson5ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
