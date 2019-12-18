import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2ShellComponent } from './lesson2-shell.component';

describe('Lesson2ShellComponent', () => {
  let component: Lesson2ShellComponent;
  let fixture: ComponentFixture<Lesson2ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson2ShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
