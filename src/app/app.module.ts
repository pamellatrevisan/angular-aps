import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './core/login/login.component';

import { AutenticacaoService } from './core/login/autenticacao.service';
import { FormsModule } from '@angular/forms';
import { AutenticacaoGuard } from './guards/autenticacao.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AutenticacaoService, 
    AutenticacaoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
