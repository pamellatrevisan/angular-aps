import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoService } from './recurso.service';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { RecursoFormularioComponent } from './recurso-formulario/recurso-formulario.component';
import { RecursoDetalheComponent } from './recurso-detalhe/recurso-detalhe.component';

@NgModule({
  providers: [RecursoService],
  declarations: [RecursoListaComponent, RecursoFormularioComponent, RecursoDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
