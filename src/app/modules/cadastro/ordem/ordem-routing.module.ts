import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemListaComponent } from './ordem-lista/ordem-lista.component';
import { OrdemFormularioComponent } from './ordem-formulario/ordem-formulario.component';
import { OrdemDetalheComponent } from './ordem-detalhe/ordem-detalhe.component';

const routes: Routes = [
  {path: 'cadastro/ordem', component: OrdemListaComponent, children: [
    {path: 'novo', component: OrdemFormularioComponent},
    {path: ':id', component: OrdemDetalheComponent},
    {path: ':id/editar', component: OrdemFormularioComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemRoutingModule { }
