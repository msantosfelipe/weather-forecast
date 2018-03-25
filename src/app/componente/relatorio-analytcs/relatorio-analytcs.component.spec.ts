import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAnalytcsComponent } from './relatorio-analytcs.component';

describe('RelatorioAnalytcsComponent', () => {
  let component: RelatorioAnalytcsComponent;
  let fixture: ComponentFixture<RelatorioAnalytcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioAnalytcsComponent ]
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
