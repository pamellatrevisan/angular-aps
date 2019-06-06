import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  private clientes: any[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = this.clienteService.obterTodos();
  }

}
