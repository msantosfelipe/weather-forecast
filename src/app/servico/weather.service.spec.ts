import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WeatherService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('should get profile data of user', () => {
    const profileInfo = { };
    const weatherService = TestBed.get(WeatherService);
    const http = TestBed.get(HttpTestingController);
    let profileResponse;

    weatherService.buscarCidadesPorNome('Salvador').subscribe((response) => {
      profileResponse = response;
    });
    const param = new HttpParams()
    .append('q', 'Salvador')
    .append('lang', 'pt')
    .append('appid', environment.apiKey);
    // http.expectOne('https://api.openweathermap.org/data/2.5//find', {params: param}).flush(profileInfo);
    // expect(profileResponse).toEqual(profileInfo);
  });

});
