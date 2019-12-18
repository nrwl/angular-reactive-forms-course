import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3CompletedClientSideTableComponent } from './lesson3-completed-client-side-table.component';

describe('Lesson3CompletedClientSideTableComponent', () => {
  let component: Lesson3CompletedClientSideTableComponent;
  let fixture: ComponentFixture<Lesson3CompletedClientSideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3CompletedClientSideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3CompletedClientSideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
