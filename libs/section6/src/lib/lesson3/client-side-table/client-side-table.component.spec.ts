import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSideTableComponent } from './client-side-table.component';

describe('ClientSideTableComponent', () => {
  let component: ClientSideTableComponent;
  let fixture: ComponentFixture<ClientSideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
