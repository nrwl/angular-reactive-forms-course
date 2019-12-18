import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPartyFormComponent } from './hero-party-form.component';

describe('HeroPartyFormComponent', () => {
  let component: HeroPartyFormComponent;
  let fixture: ComponentFixture<HeroPartyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroPartyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPartyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
