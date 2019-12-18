import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedDiscardChangesDialogComponent } from './completed-discard-changes-dialog.component';

describe('CompletedDiscardChangesDialogComponent', () => {
  let component: CompletedDiscardChangesDialogComponent;
  let fixture: ComponentFixture<CompletedDiscardChangesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedDiscardChangesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedDiscardChangesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
