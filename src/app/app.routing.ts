import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './modules/home/home.component';
import { RecursosComponent } from './modules/cadastros/recursos/recursos.component';
import { ClientesComponent } from './modules/cadastros/clientes/clientes.component';
import { ClientesDetalhesComponent } from './modules/cadastros/clientes-detalhes/clientes-detalhes.component';
import { OrdensComponent } from './modules/cadastros/ordens/ordens.component';
import { PlanejamentoComponent } from './modules/planejamento/planejamento.component';
import { AboutComponent } from './modules/about/about.component';

const APP_ROUTES: Routes = [
    { path: 'cadastros/recursos', component: RecursosComponent},
    { path: 'cadastros/clientes', component: ClientesComponent},
    { path: 'cadastros/clientes/:id', component: ClientesDetalhesComponent},
    { path: 'cadastros/ordens', component: OrdensComponent},
    { path: 'planejamento', component: PlanejamentoComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);