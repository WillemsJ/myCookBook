import { TestBed, inject } from '@angular/core/testing';

import { UnitCalcService } from './unit-calc.service';

describe('UnitCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitCalcService]
    });
  });

  it('should be created', inject([UnitCalcService], (service: UnitCalcService) => {
    expect(service).toBeTruthy();
  }));
});
