import { TestBed } from '@angular/core/testing';

import { AutenticacaoGuard } from './autenticacao.guard';

describe('AutenticacaoGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticacaoGuard = TestBed.get(AutenticacaoGuard);
    expect(service).toBeTruthy();
  });
});
