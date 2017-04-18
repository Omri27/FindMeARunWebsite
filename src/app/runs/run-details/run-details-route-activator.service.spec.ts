import { TestBed, inject } from '@angular/core/testing';
import {RunDetailsRouteActivator} from "./run-details-route-activator.service";


describe('EventDetailsRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunDetailsRouteActivator]
    });
  });

  it('should ...', inject([RunDetailsRouteActivator], (service: RunDetailsRouteActivator) => {
    expect(service).toBeTruthy();
  }));
});
