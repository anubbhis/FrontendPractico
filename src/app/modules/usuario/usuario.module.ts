import { NgModule } from '@angular/core';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from 'src/app/material.modules';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    UsuarioRoutingModule,
    MaterialModule,
    CommonModule

  ]
})
export class UsuarioModule { }
