import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringConfigSettingFormComponent } from './string-config-setting-form.component';

describe('StringConfigSettingFormComponent', () => {
  let component: StringConfigSettingFormComponent;
  let fixture: ComponentFixture<StringConfigSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringConfigSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringConfigSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
