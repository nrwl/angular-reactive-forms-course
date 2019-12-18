import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeFormComponent } from './family-tree-form.component';

describe('FamilyTreeFormComponent', () => {
  let component: FamilyTreeFormComponent;
  let fixture: ComponentFixture<FamilyTreeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyTreeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTreeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
