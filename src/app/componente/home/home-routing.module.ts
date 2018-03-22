import { CidadeDetalheComponent } from './../cidade/cidade-detalhe/cidade-detalhe.component';
import { CidadeCadastroComponent } from './../cidade/cidade-cadastro/cidade-cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'cidades', component: CidadeCadastroComponent },
  { path: 'cidades/:id', component: CidadeDetalheComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
