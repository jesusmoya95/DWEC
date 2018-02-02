import { TestBed, inject } from '@angular/core/testing';

import { ServCircuitosService } from './serv-circuitos.service';

describe('ServCircuitosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServCircuitosService]
    });
  });

  it('should be created', inject([ServCircuitosService], (service: ServCircuitosService) => {
    expect(service).toBeTruthy();
  }));
});
