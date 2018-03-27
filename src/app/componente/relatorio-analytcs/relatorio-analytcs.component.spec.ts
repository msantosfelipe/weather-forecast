import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CompartilhadoModule } from './../../compartilhado/compartilhado.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAnalytcsComponent } from './relatorio-analytcs.component';

describe('RelatorioAnalytcsComponent', () => {
  let component: RelatorioAnalytcsComponent;
  let fixture: ComponentFixture<RelatorioAnalytcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CompartilhadoModule
      ],
      declarations: [RelatorioAnalytcsComponent],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioAnalytcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
