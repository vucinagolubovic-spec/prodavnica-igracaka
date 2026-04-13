import { TestBed } from '@angular/core/testing';

import { Igracke } from './igracke';

describe('Igracke', () => {
  let service: Igracke;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Igracke);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
