import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFormComponent } from './wizard-form.component';

describe('WizardFormComponent', () => {
  let component: WizardFormComponent;
  let fixture: ComponentFixture<WizardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
