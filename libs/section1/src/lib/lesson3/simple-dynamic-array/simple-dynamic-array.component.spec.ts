import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDynamicArrayComponent } from './simple-dynamic-array.component';

describe('SimpleDynamicArrayComponent', () => {
  let component: SimpleDynamicArrayComponent;
  let fixture: ComponentFixture<SimpleDynamicArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDynamicArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDynamicArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
