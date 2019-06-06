import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClientesService } from '../../cadastros/clientes/clientes.service';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  providers: [ClientesService],
  declarations: [ClienteListaComponent, ClienteFormularioComponent, ClienteDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
