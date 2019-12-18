import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmDiscardChanges.Guard.TsGuard } from './confirm-discard-changes.guard.ts.guard';

describe('ConfirmDiscardChanges.Guard.TsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmDiscardChanges.Guard.TsGuard]
    });
  });

  it('should ...', inject([ConfirmDiscardChanges.Guard.TsGuard], (guard: ConfirmDiscardChanges.Guard.TsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
