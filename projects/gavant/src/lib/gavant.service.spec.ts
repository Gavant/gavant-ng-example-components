import { TestBed } from '@angular/core/testing';

import { GavantService } from './gavant.service';

describe('GavantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GavantService = TestBed.get(GavantService);
    expect(service).toBeTruthy();
  });
});
