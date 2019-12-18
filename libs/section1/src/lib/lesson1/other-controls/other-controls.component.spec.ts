import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherControlsComponent } from './other-controls.component';

describe('OtherControlsComponent', () => {
  let component: OtherControlsComponent;
  let fixture: ComponentFixture<OtherControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
