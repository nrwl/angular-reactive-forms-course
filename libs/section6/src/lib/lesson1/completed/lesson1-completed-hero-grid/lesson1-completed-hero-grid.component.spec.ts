import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1CompletedHeroGridComponent } from './lesson1-completed-hero-grid.component';

describe('Lesson1CompletedHeroGridComponent', () => {
  let component: Lesson1CompletedHeroGridComponent;
  let fixture: ComponentFixture<Lesson1CompletedHeroGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1CompletedHeroGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1CompletedHeroGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
