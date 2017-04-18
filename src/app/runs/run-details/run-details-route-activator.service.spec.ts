import { TestBed, inject } from '@angular/core/testing';

import { EventDetailsRouteActivatorService } from './run-details-route-activator.service';

describe('EventDetailsRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDetailsRouteActivatorService]
    });
  });

  it('should ...', inject([EventDetailsRouteActivatorService], (service: EventDetailsRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
