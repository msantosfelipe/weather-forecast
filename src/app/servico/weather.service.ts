import { Cidade } from './../model/cidade.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  buscarCidadesPorNome(cidade: string) {
    const param = new HttpParams()
      .append('q', cidade)
      .append('lang', 'pt')
      .append('appid', environment.apiKey);
    return this.http.get(`${environment.apiRoot}/find`, { params: param });
  }

  buscarWeatherDataPorId(id: number) {
    const param = new HttpParams()
      .append('id', id.toString())
      .append('lang', 'pt')
      .append('appid', environment.apiKey);
    return this.http.get(`${environment.apiRoot}/weather`, { params: param });
  }

}
