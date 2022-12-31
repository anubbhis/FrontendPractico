import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';





const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatIconModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,








];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
