import { TestBed } from '@angular/core/testing';

import { AfterGuardGuard } from './after-guard.guard';

describe('AfterGuardGuard', () => {
  let guard: AfterGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfterGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
