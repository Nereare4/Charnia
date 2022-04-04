import { TestBed } from '@angular/core/testing';

import { AutentifService } from './autentif.service';

describe('AutentifService', () => {
  let service: AutentifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
