import { FormsModule } from '@angular/forms';
import { NavbarModule } from './../componente/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TemperaturaToCelsiusPipe } from './pipe/temperatura-to-celsius.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,

    MatInputModule
  ],
  declarations: [
    TemperaturaToCelsiusPipe
  ],
  exports: [
    FormsModule,
    NavbarModule,
    MatInputModule,
    TemperaturaToCelsiusPipe
  ]
})
export class CompartilhadoModule { }
