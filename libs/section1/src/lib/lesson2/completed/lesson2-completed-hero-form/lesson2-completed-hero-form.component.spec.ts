import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2CompletedHeroFormComponent } from './lesson2-completed-hero-form.component';

describe('Lesson2CompletedPokemonFormComponent', () => {
  let component: Lesson2CompletedHeroFormComponent;
  let fixture: ComponentFixture<Lesson2CompletedHeroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson2CompletedHeroFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2CompletedHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
