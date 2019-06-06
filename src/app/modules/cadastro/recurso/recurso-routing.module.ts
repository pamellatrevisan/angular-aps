import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { RecursoFormularioComponent } from './recurso-formulario/recurso-formulario.component';
import { RecursoDetalheComponent } from './recurso-detalhe/recurso-detalhe.component';

const routes: Routes = [
  /* decidir se será child route
  {path: 'cadastro/recurso', component: RecursoListaComponent, children: [
    {path: 'novo', component: RecursoFormularioComponent},
    {path: ':id', component: RecursoDetalheComponent},
    {path: ':id/editar', component: RecursoFormularioComponent},
  ]},
  */
  {path: 'cadastro/recurso', component: RecursoListaComponent},
  {path: 'cadastro/recurso/novo', component: RecursoFormularioComponent},
  {path: 'cadastro/recurso/:id', component: RecursoDetalheComponent},
  {path: 'cadastro/recurso/:id/editar', component: RecursoFormularioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursoRoutingModule { }
