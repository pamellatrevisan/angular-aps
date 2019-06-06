import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ClientesDetalhesComponent } from './clientes-detalhes/clientes-detalhes.component';
import { ClientesService } from './clientes.service';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetalhesComponent,
  ],
  providers: [
    ClientesService
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
