import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWizardFormComponent } from './completed-wizard-form.component';

describe('CompletedWizardFormComponent', () => {
  let component: CompletedWizardFormComponent;
  let fixture: ComponentFixture<CompletedWizardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedWizardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedWizardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
