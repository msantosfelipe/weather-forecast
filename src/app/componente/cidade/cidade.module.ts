import { CompartilhadoModule } from './../../compartilhado/compartilhado.module';
import { CidadeCadastroComponent } from './cidade-cadastro/cidade-cadastro.component';
import { CidadeDetalheComponent } from './cidade-detalhe/cidade-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [
    CidadeCadastroComponent,
    CidadeDetalheComponent
  ]
})
export class CidadeModule { }
