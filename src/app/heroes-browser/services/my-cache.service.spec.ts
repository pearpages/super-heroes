import { TestBed, inject } from '@angular/core/testing';

import { MyCacheService } from './my-cache.service';

describe('MyCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCacheService]
    });
  });

  it('should be created', inject([MyCacheService], (service: MyCacheService) => {
    expect(service).toBeTruthy();
  }));
});
