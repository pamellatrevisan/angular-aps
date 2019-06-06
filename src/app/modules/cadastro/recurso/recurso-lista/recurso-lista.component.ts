import { Component, OnInit } from '@angular/core';

import { RecursoService } from '../recurso.service';

@Component({
  selector: 'app-recurso-lista',
  templateUrl: './recurso-lista.component.html',
  styleUrls: ['./recurso-lista.component.css']
})
export class RecursoListaComponent implements OnInit {

  constructor(private recursoService: RecursoService) { }

  ngOnInit() {
  }

}
