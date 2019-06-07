import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { AutenticacaoGuard } from './guards/autenticacao.guard';

const routes: Routes = [
  { path: 'cadastro/cliente', loadChildren: './modules/cadastro/cliente/cliente.module#ClienteModule', canActivate: [AutenticacaoGuard] },
  { path: 'cadastro/ordem', loadChildren: './modules/cadastro/ordem/ordem.module#OrdemModule', canActivate: [AutenticacaoGuard] },
  { path: 'cadastro/recurso', loadChildren: './modules/cadastro/recurso/recurso.module#RecursoModule', canActivate: [AutenticacaoGuard] },
  { path: 'cadastros/clientes', loadChildren: './modules/cadastros/clientes/clientes.module#ClientesModule', canActivate: [AutenticacaoGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent, canActivate: [AutenticacaoGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
