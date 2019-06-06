import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemListaComponent } from './ordem-lista/ordem-lista.component';
import { OrdemFormularioComponent } from './ordem-formulario/ordem-formulario.component';
import { OrdemDetalheComponent } from './ordem-detalhe/ordem-detalhe.component';

const routes: Routes = [
  /* decidir se será child route
  {path: 'cadastro/ordem', component: OrdemListaComponent, children: [
    {path: 'novo', component: OrdemFormularioComponent},
    {path: ':id', component: OrdemDetalheComponent},
    {path: ':id/editar', component: OrdemFormularioComponent},
  ]},
  */
  {path: 'cadastro/ordem', component: OrdemListaComponent},
  {path: 'cadastro/ordem/novo', component: OrdemFormularioComponent},
  {path: 'cadastro/ordem/:id', component: OrdemDetalheComponent},
  {path: 'cadastro/ordem/:id/editar', component: OrdemFormularioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemRoutingModule { }
