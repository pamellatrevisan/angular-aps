import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { RecursoFormularioComponent } from './recurso-formulario/recurso-formulario.component';
import { RecursoDetalheComponent } from './recurso-detalhe/recurso-detalhe.component';

@NgModule({
  declarations: [RecursoListaComponent, RecursoFormularioComponent, RecursoDetalheComponent],
  imports: [
    CommonModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
