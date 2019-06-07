import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private usuarioAutenticado: boolean = false;
  
  validarAutenticacao = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  autenticar(usuario: Usuario) {
    if (usuario.login == 'usuario@email.com' && 
    usuario.senha == '123456') {
      this.usuarioAutenticado = false;
      this.validarAutenticacao.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.validarAutenticacao.emit(false);
    }
  }
}
