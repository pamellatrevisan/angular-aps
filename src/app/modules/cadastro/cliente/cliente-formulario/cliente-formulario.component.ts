import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  private inscricao: Subscription;
  private id: number;
  private cliente: any;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = +params['id'];
      this.cliente = this.clienteService.obterPorId(this.id);
      console.log(this.cliente);
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
