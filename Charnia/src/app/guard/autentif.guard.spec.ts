import { TestBed } from '@angular/core/testing';

import { AutentifGuard } from './autentif.guard';

describe('AutentifGuard', () => {
  let guard: AutentifGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutentifGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
