import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringAListComponent } from './filtering-a-list.component';

describe('FilteringAListComponent', () => {
  let component: FilteringAListComponent;
  let fixture: ComponentFixture<FilteringAListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteringAListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
