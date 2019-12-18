import { TestBed, async, inject } from '@angular/core/testing';

import { CompletedConfirmDiscardChangesGuard } from './completed-confirm-discard-changes.guard';

describe('CompletedConfirmDiscardChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletedConfirmDiscardChangesGuard]
    });
  });

  it('should ...', inject([CompletedConfirmDiscardChangesGuard], (guard: CompletedConfirmDiscardChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
