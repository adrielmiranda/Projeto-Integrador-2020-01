import { TestBed } from '@angular/core/testing';

import { LaboratorioSalaService } from './laboratorio-sala.service';

describe('LaboratorioSalaService', () => {
  let service: LaboratorioSalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratorioSalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
