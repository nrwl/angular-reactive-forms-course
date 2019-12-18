import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideTableComponent } from './server-side-table.component';

describe('ServerSideTableComponent', () => {
  let component: ServerSideTableComponent;
  let fixture: ComponentFixture<ServerSideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
