import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroValidationComponent } from './hero-validation.component';

describe('HeroValidationComponent', () => {
  let component: HeroValidationComponent;
  let fixture: ComponentFixture<HeroValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
