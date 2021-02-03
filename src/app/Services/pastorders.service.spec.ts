import { TestBed } from '@angular/core/testing';

import { PastordersService } from './pastorders.service';

describe('PastordersService', () => {
  let service: PastordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
