import { TestBed, inject } from '@angular/core/testing';

import { RunService } from './run.service';

describe('RunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunService]
    });
  });

  it('should ...', inject([RunService], (service: RunService) => {
    expect(service).toBeTruthy();
  }));
});
