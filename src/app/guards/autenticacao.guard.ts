import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from '../core/login/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.autenticacaoService.usuarioEstaAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }  
  }

}
