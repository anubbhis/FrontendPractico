import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '@angular/router';
import { response, Router } from 'express';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

//   constructor(private http:HttpClient, private router: Router) { }
//   private getHeaders(): HttpHeaders{
//     const headers = new HttpHeaders({
//       'Access-Control-Allow-Origin': '*'
//     });
//     return headers;
//   }

//   Login(data:any){
//     const options = {headers: this.getHeaders()};
//       return this.http.post('http://[::1]:3000/login', data, options);
//   }

}
