import { Component, OnInit } from '@angular/core';

import { RecursoService } from '../recurso.service';

@Component({
  selector: 'app-recurso-detalhe',
  templateUrl: './recurso-detalhe.component.html',
  styleUrls: ['./recurso-detalhe.component.css']
})
export class RecursoDetalheComponent implements OnInit {

  constructor(private recursoService: RecursoService) { }

  ngOnInit() {
  }

}
