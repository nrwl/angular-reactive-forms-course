import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3CompletedHeroFormComponent } from './lesson3-completed-hero-form.component';

describe('Lesson3CompletedHeroFormComponent', () => {
  let component: Lesson3CompletedHeroFormComponent;
  let fixture: ComponentFixture<Lesson3CompletedHeroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3CompletedHeroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3CompletedHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
