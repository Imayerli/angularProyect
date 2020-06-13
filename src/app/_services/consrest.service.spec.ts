import { TestBed, inject } from '@angular/core/testing';

import { ConsrestService } from './consrest.service';

describe('ConsrestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsrestService]
    });
  });

  it('should be created', inject([ConsrestService], (service: ConsrestService) => {
    expect(service).toBeTruthy();
  }));
});
