import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson4CompletedServerSideTableComponent } from './lesson4-completed-server-side-table.component';

describe('Lesson4CompletedServerSideTableComponent', () => {
  let component: Lesson4CompletedServerSideTableComponent;
  let fixture: ComponentFixture<Lesson4CompletedServerSideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson4CompletedServerSideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson4CompletedServerSideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
