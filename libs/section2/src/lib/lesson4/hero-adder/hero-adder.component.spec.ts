import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAdderComponent } from './hero-adder.component';

describe('HeroAdderComponent', () => {
  let component: HeroAdderComponent;
  let fixture: ComponentFixture<HeroAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
