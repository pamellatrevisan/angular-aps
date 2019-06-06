import { Component, OnInit } from '@angular/core';

import { RecursoService } from '../recurso.service';

@Component({
  selector: 'app-recurso-formulario',
  templateUrl: './recurso-formulario.component.html',
  styleUrls: ['./recurso-formulario.component.css']
})
export class RecursoFormularioComponent implements OnInit {

  constructor(private recursoService: RecursoService) { }

  ngOnInit() {
  }

}
