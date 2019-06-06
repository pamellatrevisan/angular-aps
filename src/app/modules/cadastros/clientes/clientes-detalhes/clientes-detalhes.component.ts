import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-detalhes',
  templateUrl: './clientes-detalhes.component.html',
  styleUrls: ['./clientes-detalhes.component.css']
})
export class ClientesDetalhesComponent implements OnInit {

  inscricao: Subscription;
  id: number;
  cliente: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = +params['id'];
      this.cliente = this.clientesService.getCliente(this.id);

      if (this.cliente == null) {
        this.router.navigate(['/cadastros/clientes']);
      }
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
