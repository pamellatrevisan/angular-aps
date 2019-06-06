import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteService } from './cliente.service';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  declarations: [
    ClienteListaComponent, 
    ClienteFormularioComponent, 
    ClienteDetalheComponent
  ],
  providers: [
    ClienteService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
