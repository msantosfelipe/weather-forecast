import { Cidade } from './../../model/cidade.model';
import { WeatherService } from './../../servico/weather.service';
import { CidadeService } from './../../servico/cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cidadeFavorita: Cidade;
  constructor(
    private cidadeService: CidadeService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.carregarCidadeFavorita();
  }

  carregarCidadeFavorita() {
    const lista = this.cidadeService.buscarListaCidades();
    if (lista) {
      lista.forEach((city) => {
        if (city.favorita) {
          this.weatherService.buscarWeatherDataPorId(city.id)
          .subscribe((retorno) => {
            this.cidadeFavorita = retorno as Cidade;
          });
        }
      });
    }
  }

}
