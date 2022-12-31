import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ComiteService } from '../../services/comite.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {

  formGroup: FormGroup;
  usuarios: any;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


    constructor(private formBuilder: FormBuilder, private comiteService: ComiteService) {
      this.formGroup = this.formBuilder.group({
        usuario_id: new FormControl('', [Validators.required]),
        rut: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{7,8}-[0-9kK]$')]),
        razon: new FormControl('', [Validators.required]),
        direccion: new FormControl ('', [Validators.required]),
        comuna: new FormControl('', [Validators.required]),
        fecha: new FormControl('', [Validators.required]),

      });

    }

  onSubmit() {
    const formValue = this.formGroup.value;
  }

  crearComite(value: any){
    console.log(value);
    if(value.rut!=""&& value.razon!="" && value.direccion!="" && value.comuna!="" && value.fecha!=""){
      let month= value.fecha.getMonth()+1;
      let day= value.fecha.getDate();
      let year= value.fecha.getFullYear();
      let fecha= year+"-"+month+"-"+day;
      let fechaFinal = new Date(fecha);
      let data={
        "rut": value.rut,
        "razon": value.razon,
        "direccion": value.direccion,
        "comuna": value.comuna,
        "fecha": fechaFinal,
        "usuario_id": value.usuario_id
      }
      console.log(data);
      this.comiteService.crearComite(data).subscribe((res:any)=>{
        console.log(res);
        this.Toast.fire({
          icon: 'success',
          title: "comite creado con éxito "
        })
        this.formGroup.reset();
      });

    }
    this.Toast.fire({
      icon: 'error',
      title: "Ingrese todos los datos "
    })

    }
  ngOnInit(): void {
    this.comiteService.getUsuarios().subscribe((res:any)=>{
      this.usuarios=res;
      console.log(this.usuarios);
    }
    );
  }

}
