import { RelatorioAnalytcsModule } from './componente/relatorio-analytcs/relatorio-analytcs.module';
import { HomeModule } from './componente/home/home.module';
import { CidadeModule } from './componente/cidade/cidade.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    HomeModule,
    CidadeModule,
    RelatorioAnalytcsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
