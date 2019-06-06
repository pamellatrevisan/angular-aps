import { Component, OnInit } from '@angular/core';

import { OrdemService } from '../ordem.service';

@Component({
  selector: 'app-ordem-detalhe',
  templateUrl: './ordem-detalhe.component.html',
  styleUrls: ['./ordem-detalhe.component.css']
})
export class OrdemDetalheComponent implements OnInit {

  constructor(private ordemService: OrdemService) { }

  ngOnInit() {
  }

}
