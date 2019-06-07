import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/Usuario';
import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }

  login() {
    this.autenticacaoService.autenticar(this.usuario);
  }

}
