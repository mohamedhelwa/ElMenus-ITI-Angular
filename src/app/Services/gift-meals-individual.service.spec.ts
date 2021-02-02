import { TestBed } from '@angular/core/testing';

import { GiftMealsIndividualService } from './gift-meals-individual.service';

describe('GiftMealsIndividualService', () => {
  let service: GiftMealsIndividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftMealsIndividualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
