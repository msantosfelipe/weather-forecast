import { Cidade } from './../model/cidade.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CidadeService {

  constructor() { }

  salvarNovaCidade(cidade: Cidade): Array<Cidade> {
    const storage = this.buscarListaCidades();
    let lista = new Array<Cidade>();
    if (storage !== null) {
      lista = storage;
    }
    lista.push(cidade);
    localStorage.setItem('listaCidades', JSON.stringify(lista));
    return lista;
  }

  buscarListaCidades(): Array<Cidade> {
    return JSON.parse(localStorage.getItem('listaCidades'));
  }

  atualizarCidade(cidade) {
    const lista = this.buscarListaCidades();
    const aux = [];
    lista.forEach((city) => {
      if (city.id === cidade.id) {
        aux.push(cidade);
      } else {
        aux.push(city);
      }
    });
    localStorage.setItem('listaCidades', JSON.stringify(aux));
  }

}
