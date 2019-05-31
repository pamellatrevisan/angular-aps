import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientesComponent } from './modules/cadastros/clientes/clientes.component';
import { RecursosComponent } from './modules/cadastros/recursos/recursos.component';
import { OrdensComponent } from './modules/cadastros/ordens/ordens.component';
import { PlanejamentoComponent } from './modules/planejamento/planejamento.component';
import { AboutComponent } from './modules/about/about.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientesComponent,
    RecursosComponent,
    PlanejamentoComponent,
    AboutComponent,
    OrdensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
