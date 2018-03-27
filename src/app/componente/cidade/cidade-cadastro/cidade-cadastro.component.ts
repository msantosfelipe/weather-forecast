import { CidadeService } from '@service/cidade.service';
import { Cidade } from './../../../model/cidade.model';
import { WeatherService } from '@service/weather.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-cidade-cadastro',
  templateUrl: './cidade-cadastro.component.html',
  styleUrls: ['./cidade-cadastro.component.scss']
})
export class CidadeCadastroComponent extends BaseComponent implements OnInit {

  public nomeCidade: string;
  public listaCidadesPesquisadas: Cidade[];
  public listaCidadesAdicionadas: Cidade[];

  constructor(
    private router: Router,
    private weatherService: WeatherService,
    private cidadeService: CidadeService
  ) {
    super();
  }

  ngOnInit() {
    this.listaCidadesPesquisadas = new Array<Cidade>();
    this.listaCidadesAdicionadas = new Array<Cidade>();
    this.exibirAlertDanger = false;
    this.exibirAlertWarning = false;
    this.msgAlertDanger = '';
    this.msgAlertWarning = '';
    this.buscarCidadesAdicionadas();
  }

  buscarCidadesAdicionadas() {
    this.listaCidadesAdicionadas = this.cidadeService.buscarListaCidades();
  }

  limpar() {
    this.listaCidadesPesquisadas = new Array<Cidade>();
    this.nomeCidade = '';
  }

  pesquisar() {
    this.hideAlertaDanger();
    if (this.nomeCidade) {
      this.listaCidadesPesquisadas = new Array<Cidade>();
      this.exibirLoading();
      this.weatherService.buscarCidadesPorNome(this.nomeCidade)
        .subscribe((response: any) => {
          if (response && response.count > 0) {
            response.list.forEach(element => {
              const cidade: Cidade = element;
              this.listaCidadesPesquisadas.push(cidade);
            });
          } else {
            this.exibirAlertaDanger('Cidade não encontrada');
          }
          this.esconderLoading();
        }, (error) => {
          this.esconderLoading();
          this.exibirAlertaDanger('Ocorreu um erro, tente novamente');
        });
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }

  verMapa(cidade: Cidade): string {
    return `https://www.google.com.br/maps/place/${cidade.coord.lat}+${cidade.coord.lon}`;
  }

  adicionar(cidade: Cidade) {
    if (this.cidadeJaAdicionada(cidade)) {
      this.exibirAlertaWarning('Cidade já adicionada');
    } else {
      this.listaCidadesAdicionadas = this.cidadeService.salvarNovaCidade(cidade);
      const index = this.listaCidadesPesquisadas.indexOf(cidade);
      this.listaCidadesPesquisadas.splice(index, 1);
    }
  }

  cidadeJaAdicionada(cidade: Cidade): boolean {
    let retorno = false;
    const lista = this.cidadeService.buscarListaCidades();
    if (lista) {
      lista.forEach((city) => {
        if (city.id === cidade.id) {
          retorno = true;
        }
      });
    }
    return retorno;
  }

  favoritarCidade(cidade: Cidade, flag: boolean) {
    if (flag && !this.exiteFavorito()) {
      cidade.favorita = flag;
    } else {
      cidade.favorita = false;
    }
    this.cidadeService.atualizarCidade(cidade);
  }

  exiteFavorito(): boolean {
    let retorno = false;
    this.cidadeService.buscarListaCidades().forEach((cidade) => {
      if (cidade.favorita) {
        retorno = true;
      }
    });
    return retorno;
  }

}
