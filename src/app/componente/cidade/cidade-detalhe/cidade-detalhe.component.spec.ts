import { CompartilhadoModule } from './../../../compartilhado/compartilhado.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeDetalheComponent } from './cidade-detalhe.component';
import { Router } from '@angular/router';

describe('CidadeDetalheComponent', () => {
  let component: CidadeDetalheComponent;
  let fixture: ComponentFixture<CidadeDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CompartilhadoModule
      ],
      declarations: [CidadeDetalheComponent],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
