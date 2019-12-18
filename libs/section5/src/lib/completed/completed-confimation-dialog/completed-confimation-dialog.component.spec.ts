import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedConfimationDialogComponent } from './completed-confimation-dialog.component';

describe('CompletedConfimationDialogComponent', () => {
  let component: CompletedConfimationDialogComponent;
  let fixture: ComponentFixture<CompletedConfimationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedConfimationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedConfimationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
