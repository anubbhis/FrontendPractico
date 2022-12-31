import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSComponent } from './components/crear-s/crear-s.component';
import { EditarSComponent } from './components/editar-s/editar-s.component';
import { HomeSocioComponent } from './components/home-socio/home-socio.component';

const routes: Routes = [
  //importar componente de socio para linkear a la ruta
  { path: '', component: HomeSocioComponent },
  { path: 'crear', component: CrearSComponent },
  { path: 'editar', component: EditarSComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocioRoutingModule { }
