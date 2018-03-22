import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-cadastro',
  templateUrl: './cidade-cadastro.component.html',
  styleUrls: ['./cidade-cadastro.component.scss']
})
export class CidadeCadastroComponent implements OnInit {

  public novaCidade: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['/']);
  }

}
