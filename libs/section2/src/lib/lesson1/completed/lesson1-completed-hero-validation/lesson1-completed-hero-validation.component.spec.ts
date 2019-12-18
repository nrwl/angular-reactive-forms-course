import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedHeroValidationComponent } from './lesson1-completed-hero-validation.component';

describe('Lesson1CompletedHeroValidationComponent', () => {
  let component: Lesson1CompletedHeroValidationComponent;
  let fixture: ComponentFixture<Lesson1CompletedHeroValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedHeroValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedHeroValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
