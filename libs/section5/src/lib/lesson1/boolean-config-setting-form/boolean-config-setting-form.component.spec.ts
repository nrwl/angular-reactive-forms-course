import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanConfigSettingFormComponent } from './boolean-config-setting-form.component';

describe('BooleanConfigSettingFormComponent', () => {
  let component: BooleanConfigSettingFormComponent;
  let fixture: ComponentFixture<BooleanConfigSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanConfigSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanConfigSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
