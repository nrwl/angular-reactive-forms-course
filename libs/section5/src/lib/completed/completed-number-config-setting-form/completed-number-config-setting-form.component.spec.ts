import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedNumberConfigSettingFormComponent } from './completed-number-config-setting-form.component';

describe('CompletedNumberConfigSettingFormComponent', () => {
  let component: CompletedNumberConfigSettingFormComponent;
  let fixture: ComponentFixture<CompletedNumberConfigSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedNumberConfigSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedNumberConfigSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
