import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { SocioService } from '../../services/socio.service';

@Component({
  selector: 'app-home-socio',
  templateUrl: './home-socio.component.html',
  styleUrls: ['./home-socio.component.scss']
})
export class HomeSocioComponent {
   // Variables para el slide toggle
   color: ThemePalette = 'accent';
   checked = false;
   disabled = false;
 // Variables para la tabla de socios

 displayedColumns: string[] = ['estado','rut', 'nombre', 'direccion', 'comuna','opciones'];
 dataSource = new MatTableDataSource();

 constructor(private socioService: SocioService, private router: Router) {

 }

 ngOnInit(){
   this.getAllSocios();
 }

 getAllSocios(){
   this.socioService.getSocio().subscribe((data: any) => {
     this.dataSource.data = data;
     console.log(data);
   });
 }

 cambiarEstadoSocio(event: any, socio: any){
   // Abrir un formulario para ver los campos del socio
   console.log(socio);
   console.log(event);

 }
 editarSocio(socio: any){
   // Abrir un formulario reactivo para editar un socio
   this.router.navigate(['/socio/editar']);

 }
 agregarSocio(){
   // Abrir un formulario reactivo para agregar un socio
   this.router.navigate(['/socio/crear']);
 }

}
