import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3ShellComponent } from './lesson3-shell.component';

describe('Lesson3ShellComponent', () => {
  let component: Lesson3ShellComponent;
  let fixture: ComponentFixture<Lesson3ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3ShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
