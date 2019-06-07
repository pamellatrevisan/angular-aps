import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: 'cadastro/cliente', loadChildren: './modules/cadastro/cliente/cliente.module#ClienteModule' },
  { path: 'cadastro/ordem', loadChildren: './modules/cadastro/ordem/ordem.module#OrdemModule' },
  { path: 'cadastro/recurso', loadChildren: './modules/cadastro/recurso/recurso.module#RecursoModule' },
  { path: 'cadastros/clientes', loadChildren: './modules/cadastros/clientes/clientes.module#ClientesModule' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
