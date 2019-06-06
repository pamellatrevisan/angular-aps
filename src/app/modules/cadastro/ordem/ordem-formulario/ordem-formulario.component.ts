import { Component, OnInit } from '@angular/core';

import { OrdemService } from '../ordem.service';

@Component({
  selector: 'app-ordem-formulario',
  templateUrl: './ordem-formulario.component.html',
  styleUrls: ['./ordem-formulario.component.css']
})
export class OrdemFormularioComponent implements OnInit {

  constructor(private ordemService: OrdemService) { }

  ngOnInit() {
  }

}
