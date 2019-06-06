import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdemRoutingModule } from './ordem-routing.module';
import { OrdemListaComponent } from './ordem-lista/ordem-lista.component';
import { OrdemFormularioComponent } from './ordem-formulario/ordem-formulario.component';
import { OrdemDetalheComponent } from './ordem-detalhe/ordem-detalhe.component';
import { OrdemService } from './ordem.service';

@NgModule({
  providers: [OrdemService],
  declarations: [OrdemListaComponent, OrdemFormularioComponent, OrdemDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrdemRoutingModule
  ]
})
export class OrdemModule { }
