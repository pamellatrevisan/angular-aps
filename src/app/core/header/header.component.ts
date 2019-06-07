import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../login/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioAutenticado: boolean = false;

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
    this.autenticacaoService.validarAutenticacao.subscribe((param: boolean) => {
      this.usuarioAutenticado = param;
    });
  }
  
}
