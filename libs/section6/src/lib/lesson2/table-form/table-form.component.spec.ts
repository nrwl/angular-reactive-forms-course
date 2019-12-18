import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormComponent } from './table-form.component';

describe('TableFormComponent', () => {
  let component: TableFormComponent;
  let fixture: ComponentFixture<TableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
