import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioRoutingModule } from './socio-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.modules';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EditarSComponent } from './components/editar-s/editar-s.component';
import { CrearSComponent } from './components/crear-s/crear-s.component';
import { HomeSocioComponent } from './components/home-socio/home-socio.component';


@NgModule({
  declarations: [
    HomeSocioComponent,
    EditarSComponent,
    CrearSComponent,

  ],
  imports: [
    CommonModule,
    SocioRoutingModule,
    MatIconModule,
    MaterialModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule

  ]
})
export class SocioModule { }
