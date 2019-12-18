import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3CompletedHeroValidationComponent } from './lesson3-completed-hero-validation.component';

describe('Lesson3CompletedHeroValidationComponent', () => {
  let component: Lesson3CompletedHeroValidationComponent;
  let fixture: ComponentFixture<Lesson3CompletedHeroValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3CompletedHeroValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3CompletedHeroValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
