import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SocioService } from '../../services/socio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-s',
  templateUrl: './crear-s.component.html',
  styleUrls: ['./crear-s.component.scss']
})
export class CrearSComponent {

  formGroup: FormGroup;
  comites: any;
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

    constructor(private formBuilder: FormBuilder, private socioService: SocioService) {

      this.formGroup = this.formBuilder.group({
        comite: new FormControl('', [Validators.required]),
        rut: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{7,8}-[0-9kK]$')]),
        nombre: new FormControl('', [Validators.required]),
        direccion: new FormControl ('', [Validators.required]),
        comuna: new FormControl('', [Validators.required]),


      });

    }

  onSubmit() {
    const formValue = this.formGroup.value;
  }

  crearSocio(value: any){
    console.log(value);
    if(value.rut!=""&& value.nombre!="" && value.direccion!="" && value.comuna!=""){
      let data={
        "comite": value.comite,
        "rut": value.rut,
        "nombre": value.nombre,
        "direccion": value.direccion,
        "comuna": value.comuna,
      }
      console.log(data);
      this.socioService.crearSocio(data).subscribe((res:any)=>{
        console.log(res);
        this.Toast.fire({
          icon: 'success',
          title: "socio creado con éxito "
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
    this.socioService.getSocio().subscribe((res:any)=>{
      this.comites=res;
      console.log(this.comites);
    });

    this.socioService.getComites().subscribe((res:any)=>{
      this.comites=res;
      console.log(this.comites);
    }
    );
  }

}
