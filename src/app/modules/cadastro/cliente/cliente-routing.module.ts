import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

const routes: Routes = [
  {path: 'cadastro/cliente', component: ClienteListaComponent, children: [
    {path: 'novo', component: ClienteFormularioComponent},
    {path: ':id', component: ClienteDetalheComponent},
    {path: ':id/editar', component: ClienteFormularioComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
