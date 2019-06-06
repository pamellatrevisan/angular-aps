import { Component, OnInit, OnDestroy } from '@angular/core';

import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  private id: number;
  private cliente: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = +params['id'];
      this.cliente = this.clienteService.obterPorId(this.id);
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarCliente() {
    this.router.navigate(['/cadastro/cliente', this.cliente.id, 'editar']);
  }

}
