import { FormsModule } from '@angular/forms';
import { NavbarModule } from './../componente/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,

    MatInputModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    NavbarModule,
    MatInputModule
  ]
})
export class CompartilhadoModule { }
