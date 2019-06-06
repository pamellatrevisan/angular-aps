import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  inscricao: Subscription;
  TAMANHO_PAGINA: number = 10;
  inicio: number;
  clientes: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService) { }

  ngOnInit() {
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.inicio = queryParams['inicio'] == null ? 0 : +queryParams['inicio'];
    })
    this.clientes = this.clientesService.getClientes();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  paginar(qtdePaginas: number) {
    let proximoInicio = this.inicio + (qtdePaginas * this.TAMANHO_PAGINA);
    if (proximoInicio >= 0) {
      this.router.navigate(['/cadastros/clientes'], {queryParams: {'inicio': proximoInicio}});
    }
  }
  
}
