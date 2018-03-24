import { Cidade } from './../../../model/cidade.model';
import { WeatherService } from './../../../servico/weather.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-cadastro',
  templateUrl: './cidade-cadastro.component.html',
  styleUrls: ['./cidade-cadastro.component.scss']
})
export class CidadeCadastroComponent implements OnInit {

  public nomeCidade: string;
  public listaCidadesPesquisadas: Cidade[];
  public listaCidadesAdicionadas: Cidade[];

  public exibirAlertDanger: boolean;
  public exibirAlertWarning: boolean;
  public msgAlertDanger: string;
  public msgAlertWarning: string;

  constructor(
    private router: Router,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.listaCidadesPesquisadas = new Array<Cidade>();
    this.listaCidadesAdicionadas = new Array<Cidade>();
    this.exibirAlertDanger = false;
    this.exibirAlertWarning = false;
    this.msgAlertDanger = '';
    this.msgAlertWarning = '';
  }

  limpar() {
    this.listaCidadesPesquisadas = new Array<Cidade>();
    this.nomeCidade = '';
  }

  isVazia(lista: any[]) {
    return lista && lista.length === 0;
  }

  pesquisar() {
    this.hideAlertaDanger();
    if (this.nomeCidade) {
      this.listaCidadesPesquisadas = new Array<Cidade>();
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
        }, (error) => {
          this.exibirAlertaDanger('Ocorreu um erro, tente novamente');
        });
    }
  }

  exibirAlertaDanger(mensagem: string): void {
    this.msgAlertDanger = mensagem;
    this.exibirAlertDanger = true;
  }

  hideAlertaDanger(): void {
    this.msgAlertDanger = '';
    this.exibirAlertDanger = false;
  }

  voltar() {
    this.router.navigate(['/']);
  }

  verMapa(cidade: Cidade): string {
    return `https://www.google.com.br/maps/place/${cidade.coord.lat}+${cidade.coord.lon}`;
  }

  adicionar(cidade: Cidade) {
    this.listaCidadesAdicionadas.push(cidade);
    const index = this.listaCidadesPesquisadas.indexOf(cidade);
    this.listaCidadesPesquisadas.splice(index, 1);
  }

}
