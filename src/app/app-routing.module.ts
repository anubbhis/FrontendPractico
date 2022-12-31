import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/usuario/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'comite', loadChildren:()=>import('./modules/comite/comite.module').then(m=>m.ComiteModule)},
  { path:'usuario', loadChildren:()=>import('./modules/usuario/usuario.module').then(m=>m.UsuarioModule)},
  { path:'socio', loadChildren:()=>import('./modules/socio/socio.module').then(m=>m.SocioModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
