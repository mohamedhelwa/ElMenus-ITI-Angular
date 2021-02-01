import { TestBed } from '@angular/core/testing';

import { RestaurantsServiceService } from './restaurants-service.service';

describe('RestaurantsServiceService', () => {
  let service: RestaurantsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
