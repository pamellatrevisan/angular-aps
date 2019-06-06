import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemRoutingModule } from './ordem-routing.module';
import { OrdemListaComponent } from './ordem-lista/ordem-lista.component';
import { OrdemFormularioComponent } from './ordem-formulario/ordem-formulario.component';
import { OrdemDetalheComponent } from './ordem-detalhe/ordem-detalhe.component';

@NgModule({
  declarations: [OrdemListaComponent, OrdemFormularioComponent, OrdemDetalheComponent],
  imports: [
    CommonModule,
    OrdemRoutingModule
  ]
})
export class OrdemModule { }
