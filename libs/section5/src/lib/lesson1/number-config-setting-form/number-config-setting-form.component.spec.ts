import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberConfigSettingFormComponent } from './number-config-setting-form.component';

describe('NumberConfigSettingFormComponent', () => {
  let component: NumberConfigSettingFormComponent;
  let fixture: ComponentFixture<NumberConfigSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberConfigSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberConfigSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
