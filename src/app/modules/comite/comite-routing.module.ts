import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //importar componente de comite para linkear a la ruta
  { path: '', component: HomeComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'editar', component: EditarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComiteRoutingModule { }
