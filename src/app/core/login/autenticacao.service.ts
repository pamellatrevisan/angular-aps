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

  efetuarLogin(usuario: Usuario) {
    this.usuarioAutenticado = (usuario.login == 'usuario@email.com' && usuario.senha == '123456');
    this.validarAutenticacao.emit(this.usuarioAutenticado);

    if (this.usuarioAutenticado) {
      this.router.navigate(['/']);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
