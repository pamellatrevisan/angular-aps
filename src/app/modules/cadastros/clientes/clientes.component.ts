import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  id: number;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // exemplo de código para obter um parametro
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = +params['id'];
      console.log(this.id);
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
