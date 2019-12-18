import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedStringConfigSettingFormComponent } from './completed-string-config-setting-form.component';

describe('CompletedStringConfigSettingFormComponent', () => {
  let component: CompletedStringConfigSettingFormComponent;
  let fixture: ComponentFixture<CompletedStringConfigSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedStringConfigSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedStringConfigSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
