import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CidadeService } from '@service/cidade.service';
import { CompartilhadoModule } from './../../../compartilhado/compartilhado.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeCadastroComponent } from './cidade-cadastro.component';
import { Router } from '@angular/router';
import { WeatherService } from '@service/weather.service';

describe('CidadeCadastroComponent', () => {
  let component: CidadeCadastroComponent;
  let fixture: ComponentFixture<CidadeCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CompartilhadoModule,
        HttpClientTestingModule,
        LoadingModule.forRoot({
          animationType: ANIMATION_TYPES.circleSwish,
          backdropBackgroundColour: 'rgba(0,0,0,0.1)',
          backdropBorderRadius: '4px',
          primaryColour: '#b3be3d',
        })      ],
      declarations: [ CidadeCadastroComponent ],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        CidadeService,
        WeatherService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
