import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent {

  rut: string='';
  razon: string='';
  direccion: string='';
  comuna: string='';
  fecha: Date= new Date;

  form: FormGroup;

  constructor (){
    this.form = new FormGroup({
      rut: new FormControl(),
      razon: new FormControl(),
      direccion: new FormControl(),
      comuna: new FormControl(),
      fecha: new FormControl(this.fecha)

    });
  }
  onSubmit() {
    const formValue = this.form.value;
  }

}


