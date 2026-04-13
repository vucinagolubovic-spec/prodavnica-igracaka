import { TestBed } from '@angular/core/testing';

import { Korpa } from './korpa';

describe('Korpa', () => {
  let service: Korpa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Korpa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
