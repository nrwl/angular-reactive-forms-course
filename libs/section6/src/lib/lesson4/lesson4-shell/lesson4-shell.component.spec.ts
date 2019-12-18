import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson4ShellComponent } from './lesson4-shell.component';

describe('Lesson4ShellComponent', () => {
  let component: Lesson4ShellComponent;
  let fixture: ComponentFixture<Lesson4ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson4ShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson4ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
