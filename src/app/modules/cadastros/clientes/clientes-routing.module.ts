import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ClientesDetalhesComponent } from './clientes-detalhes/clientes-detalhes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent},
  { path: 'cadastros/clientes/:id', component: ClientesDetalhesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
