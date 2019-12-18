import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2CompletedTableFormComponent } from './lesson2-completed-table-form.component';

describe('Lesson2CompletedTableFormComponent', () => {
  let component: Lesson2CompletedTableFormComponent;
  let fixture: ComponentFixture<Lesson2CompletedTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson2CompletedTableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2CompletedTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
