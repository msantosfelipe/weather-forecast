import { WeatherService } from './../../servico/weather.service';
import { CompartilhadoModule } from './../../compartilhado/compartilhado.module';
import { CidadeCadastroComponent } from './cidade-cadastro/cidade-cadastro.component';
import { CidadeDetalheComponent } from './cidade-detalhe/cidade-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#b3be3d',
    })
  ],
  declarations: [
    CidadeCadastroComponent,
    CidadeDetalheComponent
  ],
  providers: [
    WeatherService
  ]
})
export class CidadeModule { }
