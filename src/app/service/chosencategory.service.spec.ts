import { TestBed, inject } from '@angular/core/testing';

import { ChosencategoryService } from './chosencategory.service';

describe('ChosencategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChosencategoryService]
    });
  });

  it('should be created', inject([ChosencategoryService], (service: ChosencategoryService) => {
    expect(service).toBeTruthy();
  }));
});
