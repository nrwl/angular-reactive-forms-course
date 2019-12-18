import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBuiltInValidatorsComponent } from './simple-built-in-validators.component';

describe('SimpleBuiltInValidatorsComponent', () => {
  let component: SimpleBuiltInValidatorsComponent;
  let fixture: ComponentFixture<SimpleBuiltInValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBuiltInValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBuiltInValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
