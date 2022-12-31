import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { ComiteService } from '../../services/comite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Variables para el slide toggle
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
// Variables para la tabla de comités

  displayedColumns: string[] = ['estado','rut', 'razon', 'direccion', 'comuna','opciones'];
  dataSource = new MatTableDataSource();


  constructor(private comiteService: ComiteService, private router: Router) {

  }


ngOnInit(){

  this.getAllComites();

}

getAllComites(){

  this.comiteService.getComite().subscribe((data: any) => {
    this.dataSource.data = data;
    console.log(data);
  });


}
cambiarEstadoComite(event: any, comite: any){
  // Abrir un formulario para ver los campos del comité
  console.log(comite);
  console.log(event);

}
editarComite(comite: any){
  // Abrir un formulario reactivo para editar un comité
  this.router.navigate(['/comite/editar']);


}
agregarComite(){
  // Abrir un formulario reactivo para agregar un comité

  this.router.navigate(['/comite/crear']);
}


}






