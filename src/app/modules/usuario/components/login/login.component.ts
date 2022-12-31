import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
//   usuario: any;
//   Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', Swal.stopTimer)
//       toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
//   })

  constructor(private form: FormBuilder) { }


  onSubmit() {
    const formValue = this.formGroup.value;

  }
  // Login(value: any) {
  //   console.log(value);
    // if (value.username != "" && value.password != "") {
    //   let data = {
    //     "username": value.username,
    //     "password": value.password,
      // }
    //   this.usuario.Login(data).subscribe((res: any) => {
    //     console.log(res);
    //     if (res.status == 200) {
    //       this.Toast.fire({
    //         icon: 'success',
    //         title: "Bienvenido " + res.usuario.username
    //       })
    //     }
    //     else {
    //       this.Toast.fire({
    //         icon: 'error',
    //         title: "Usuario o contraseña incorrectos"
    //       })
    //     }
    //   })
    // }
    // else {
    //   this.Toast.fire({
    //     icon: 'error',
    //     title: "Debe llenar todos los campos"
    //   })
    // }
  // }
  // ngOnInit(): void {
  //   this.formGroup = this.form.group({
  //     username: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required]),
  //   });
  }


