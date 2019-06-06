import { Component, OnInit } from '@angular/core';

import { OrdemService } from '../ordem.service';

@Component({
  selector: 'app-ordem-lista',
  templateUrl: './ordem-lista.component.html',
  styleUrls: ['./ordem-lista.component.css']
})
export class OrdemListaComponent implements OnInit {

  constructor(private ordemService: OrdemService) { }

  ngOnInit() {
  }

}
