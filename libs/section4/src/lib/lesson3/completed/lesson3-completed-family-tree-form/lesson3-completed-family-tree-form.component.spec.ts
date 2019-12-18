import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3CompletedFamilyTreeFormComponent } from './lesson3-completed-family-tree-form.component';

describe('Lesson3CompletedFamilyTreeFormComponent', () => {
  let component: Lesson3CompletedFamilyTreeFormComponent;
  let fixture: ComponentFixture<Lesson3CompletedFamilyTreeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3CompletedFamilyTreeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3CompletedFamilyTreeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
