import { TestBed } from '@angular/core/testing';

import { PeronDataService } from './peron-data.service';

describe('PeronDataService', () => {
  let service: PeronDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeronDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
