import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson4CompletedHeroAdderComponent } from './lesson4-completed-hero-adder.component';

describe('Lesson4CompletedHeroAdderComponent', () => {
  let component: Lesson4CompletedHeroAdderComponent;
  let fixture: ComponentFixture<Lesson4CompletedHeroAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson4CompletedHeroAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson4CompletedHeroAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
