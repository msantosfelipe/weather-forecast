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
    this.exibirAlertDanger = false;
    this.exibirAlertWarning = false;
    this.msgAlertDanger = '';
    this.msgAlertWarning = '';
  }

  pesquisar() {
    if (this.nomeCidade) {
      this.listaCidadesPesquisadas = new Array<Cidade>();
      this.weatherService.buscarCidadesPorNome(this.nomeCidade)
        .subscribe((response: any) => {
          if (response && response.count > 0) {
            response.list.forEach(element => {
              const cidade: Cidade = element;
              this.listaCidadesPesquisadas.push(cidade);
            });
            console.log(this.listaCidadesPesquisadas);
          } else {
            this.exibirAlertaDanger('Nenhum registo encontrado');
          }
        }, (error) => {
          console.log(error);
        });
    }
  }

  exibirAlertaDanger(mensagem: string): void {
    this.msgAlertDanger = mensagem;
    this.exibirAlertDanger = true;
  }

  voltar() {
    this.router.navigate(['/']);
  }

}
