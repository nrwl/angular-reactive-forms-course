import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWizardComponent } from './completed-wizard.component';

describe('CompletedWizardComponent', () => {
  let component: CompletedWizardComponent;
  let fixture: ComponentFixture<CompletedWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
