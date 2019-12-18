import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2CompletedHeroPartyFormComponent } from './lesson2-completed-hero-party-form.component';

describe('Lesson2CompletedHeroPartyFormComponent', () => {
  let component: Lesson2CompletedHeroPartyFormComponent;
  let fixture: ComponentFixture<Lesson2CompletedHeroPartyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson2CompletedHeroPartyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2CompletedHeroPartyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
