import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  constructor(private http:HttpClient) { }
  private getHeaders(): HttpHeaders{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }

  getComite(){
    return this.http.get('http://[::1]:3000/comites');
  }

  crearComite(data:any){
    const options = {headers: this.getHeaders()};
    return this.http.post('http://[::1]:3000/comites', data, options);
  }
  getUsuarios(){
    return this.http.get('http://[::1]:3000/usuarios');

  }
}
