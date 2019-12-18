import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3CompletedPartyFormComponent } from './lesson3-completed-party-form.component';

describe('Lesson3CompletedPartyFormComponent', () => {
  let component: Lesson3CompletedPartyFormComponent;
  let fixture: ComponentFixture<Lesson3CompletedPartyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3CompletedPartyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3CompletedPartyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
