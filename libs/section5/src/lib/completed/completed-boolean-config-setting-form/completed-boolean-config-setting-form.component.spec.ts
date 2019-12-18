import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedBooleanConfigSettingFormComponent } from './completed-boolean-config-setting-form.component';

describe('CompletedBooleanConfigSettingFormComponent', () => {
  let component: CompletedBooleanConfigSettingFormComponent;
  let fixture: ComponentFixture<CompletedBooleanConfigSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedBooleanConfigSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedBooleanConfigSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
