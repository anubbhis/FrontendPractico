import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './modules/shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.modules';
import { ComiteModule } from './modules/comite/comite.module';
import { HttpClientModule } from '@angular/common/http';
import { SocioModule } from './modules/socio/socio.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComiteModule,
    HttpClientModule,
    FormsModule,
    SocioModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
