import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComiteRoutingModule } from './comite-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.modules';
import { MatButtonModule } from '@angular/material/button';
import { EditarComponent } from './components/editar/editar.component';
import { CrearComponent } from './components/crear/crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    HomeComponent,
    EditarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    ComiteRoutingModule,
    MatIconModule,
    MaterialModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule







  ]
})
export class ComiteModule { }
