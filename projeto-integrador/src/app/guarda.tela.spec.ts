import { TestBed } from '@angular/core/testing';

import { GuardaTela } from './guarda.tela';

describe('GuardaTela', () => {
  let service: GuardaTela;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardaTela);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
