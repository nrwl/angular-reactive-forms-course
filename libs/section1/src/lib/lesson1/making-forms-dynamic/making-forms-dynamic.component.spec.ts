import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingFormsDynamicComponent } from './making-forms-dynamic.component';

describe('MakingFormsDynamicComponent', () => {
  let component: MakingFormsDynamicComponent;
  let fixture: ComponentFixture<MakingFormsDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingFormsDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingFormsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
