import { TestBed } from '@angular/core/testing';

import { ActividadIndivService } from './actividad-indiv.service';

describe('ActividadIndivService', () => {
  let service: ActividadIndivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadIndivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
