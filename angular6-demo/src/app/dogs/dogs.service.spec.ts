import { TestBed, inject } from '@angular/core/testing';

import { DogsService } from './dogs.service';

describe('DogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogsService]
    });
  });

  it('should be created', inject([DogsService], (service: DogsService) => {
    expect(service).toBeTruthy();
  }));
});
