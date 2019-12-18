import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson4CompletedFullNameComponent } from './lesson4-completed-full-name.component';

describe('Lesson4CompletedFullNameComponent', () => {
  let component: Lesson4CompletedFullNameComponent;
  let fixture: ComponentFixture<Lesson4CompletedFullNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson4CompletedFullNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson4CompletedFullNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
