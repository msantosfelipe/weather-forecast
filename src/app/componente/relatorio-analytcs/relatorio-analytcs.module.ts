import { CompartilhadoModule } from './../../compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioAnalytcsComponent } from './relatorio-analytcs.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [RelatorioAnalytcsComponent]
})
export class RelatorioAnalytcsModule { }
